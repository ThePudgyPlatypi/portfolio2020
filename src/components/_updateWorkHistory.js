import React, {  useEffect } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import UpdateValueText from "../components/_updateValueText";
import UpdateRichText from "../components/_updateRichText";
import UpdateWorkContactCard from "../components/_updateWorkContactCard";
import UpdateWorkDuty from "../components/_updateWorkDuty";
import UpdateWorkLinks from "../components/_updateWorkLinks";
import UpdateWorkDate from "../components/_updateWorkDate";

const useStyles = makeStyles((theme) => ({
  root: {},
  linksWrapper: {
    margin: [[0, 10, 10, 10]],
  },
  linksInput: {
    width: "50%",
  },
}));

const UpdateWorkHistory = ({
  open,
  setOpen,
  work,
  setWork,
  setHistory,
  id,
  create=false,
  setCreate
}) => {
  const classes = useStyles();

  useEffect(() => {
    if(create) {
      setWork((prevState) => ({...prevState, id: id}));
    }
  }, [create, id, setWork]);

  const handleClose = (value) => {
    if (value === "submit") {
      setHistory((prevState) => {
        if (!create) {
          console.log("updating");
          let newArray = Array.from(prevState);
          let index = newArray.map((value) => value.id).indexOf(work.id);
          newArray[index] = work;
          console.log(prevState);
          console.log(newArray);
          return [...newArray];
        } else {
          return [...prevState, work];
        }
      });

      setOpen(false);
      setCreate(false);
    } else {
      setWork({});
      setOpen(false);
      setCreate(false);
    }
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="update-work-history"
        className={classes.root}
      >
        <DialogTitle>Update/Create Work History</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <UpdateValueText
                coll="info"
                id={id}
                keyVal="company"
                value={work ? work.company : ""}
                stateSetter={setWork}
                submit
              />
              <UpdateValueText
                coll="info"
                id={id}
                keyVal="avatar"
                value={work ? work.avatar : ""}
                stateSetter={setWork}
                submit
                helper="External link only"
              />
              <UpdateValueText
                coll="info"
                id={id}
                keyVal="position"
                value={work ? work.position : ""}
                stateSetter={setWork}
                submit
              />
              <UpdateWorkDate work={work} setWork={setWork} />
            </Grid>
            <Grid item xs={6}>
              <UpdateWorkContactCard work={work} setWork={setWork} id={id} />
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12}>
              <UpdateWorkDuty work={work} setWork={setWork} admin={true} />
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12}>
              <UpdateWorkLinks work={work} setWork={setWork} admin={true} />
            </Grid>
          </Grid>

          <strong>Job Description</strong>
          <UpdateRichText
            coll="info"
            id={id}
            keyVal="description"
            value={work ? work.description : ""}
            stateSetter={setWork}
            submit
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleClose("cancel");
            }}
            color="primary"
          >
            Forget about it
          </Button>
          <Button
            onClick={() => {
              handleClose("submit");
            }}
            color="primary"
          >
            Add/Update
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default UpdateWorkHistory;
