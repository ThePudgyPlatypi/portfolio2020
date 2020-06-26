import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import UpdateWorkHistory from "../components/_updateWorkHistory";

const useStyles = makeStyles((theme) => ({
  workBtn: {
    marginTop: "10px",
  },
}));

const CreateWorkHistory = ({
  open,
  setOpen,
  work,
  setWork,
  setHistory,
  id,
  create,
  setCreate
}) => {
  const classes = useStyles();

  return (
    <>
      <Button
        className={classes.workBtn}
        color="primary"
        variant="contained"
        onClick={() => {
          setCreate(true);
          setOpen(true);
          setWork({});
        }}
      >
        Add Work History
      </Button>
      <UpdateWorkHistory
        open={open}
        setOpen={setOpen}
        work={work}
        setWork={setWork}
        setHistory={setHistory}
        id={id}
        create={create}
        setCreate={setCreate}
      />
    </>
  );
};

export default CreateWorkHistory;
