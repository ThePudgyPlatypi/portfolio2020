import React, { useState, useEffect } from "react";
import {
  Card,
  Grid,
  CardContent,
  Typography,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useAuth0 } from "../react-auth0-spa";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import InfoIcon from "@material-ui/icons/Info";
import WorkContactCard from "../components/_workContactCard";
import UpdateField from "../helpers/updateField";
import CreateWorkHistory from "./_createWorkHistory";
import UpdateWorkDuty from "./_updateWorkDuty";
import UpdateWorkLinks from "./_updateWorkLinks";
import DisplayWorkDate from "./_displayWorkDate";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
  },
  historyDetails: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    marginTop: 5,
  },
  position: {
    fontStyle: "italic",
  },
  description: {
    marginTop: "20px",
  },
  duty: {
    marginTop: "20px",
  },
  links: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  secondColumn: {
    //   paddingLeft: theme.spacing(1),
  },
  icon: {
    color: "rgba(0, 0, 0, 0.8)",
  },
  titleBar: {
    display: "flex",
    justifyContent: "space-between",
    "& .adminControls": {},
  },
}));

const DisplayWorkHistory = ({ history, setHistory, id }) => {
  const classes = useStyles();
  const { isAuthenticated } = useAuth0();
  const [open, setOpen] = useState(false);
  const [work, setWork] = useState({});
  const [create, setCreate] = useState(false);

  useEffect(() => {
    UpdateField("info", id, "history", history);
  }, [history, id]);

  function descMarkup(value) {
    return {__html: value.description};
  }

  const handleDeleteWorkHistory = (e, value) => {
    setHistory((prevState) => {
      let deleted = prevState.filter((prevState) => prevState !== value);
      return [...deleted];
    });
    setWork({});
  };

  const handleEditWorkHistory = (value) => {
    setCreate(false);
    setWork(value);
    setOpen(true);
  };

  return (
    <>
      {history
        ? history.map((value, key) => (
            <Card key={key} className={classes.root}>
              <CardContent>
                <div className={classes.titleBar}>
                  <Typography variant="h6">{value.company}</Typography>

                  {isAuthenticated &&
                  window.location.pathname === "/cs-admin" ? (
                    <div className={classes.adminControls}>
                      <IconButton
                        aria-label={`delete`}
                        className={classes.icon}
                        onClick={(e) => handleDeleteWorkHistory(e, value)}
                      >
                        <DeleteForeverIcon />
                      </IconButton>

                      <IconButton
                        aria-label={`information`}
                        className={classes.icon}
                        onClick={(e) => handleEditWorkHistory(value)}
                      >
                        <InfoIcon />
                      </IconButton>
                    </div>
                  ) : null}
                </div>
                <Divider />
                <Grid container>
                  <Grid item xs={12} sm={6} md={8}>
                    <div className={classes.historyDetails}>
                      <div className={classes.title}>
                        <span className={classes.position}>{value.position}</span>
                      </div>
                      <DisplayWorkDate date={value.date} />
                      <WorkContactCard data={value} avatar={value.avatar} />
                    </div>
                  </Grid>
                  <Grid
                    item
                    className={classes.secondColumn}
                    xs={12}
                    sm={6}
                    md={4}
                  >
                    <div className={classes.duty}>
                      <UpdateWorkDuty work={value} setWork={setWork} admin={false} />
                    </div>

                    <div className={classes.links}>
                      <UpdateWorkLinks work={value} setWork={setWork} />
                    </div>
                  </Grid>
                </Grid>
                <div className={classes.description}>
                  <strong>Job Description</strong>
                  <Typography
                    className={classes.descriptionContent}
                    variant="body1"
                    id="description"
                    dangerouslySetInnerHTML={descMarkup(value)}
                  ></Typography>
                </div>
              </CardContent>
            </Card>
          ))
        : null}
      {isAuthenticated && window.location.pathname === "/cs-admin" ? (
        <CreateWorkHistory
          open={open}
          work={work}
          setOpen={setOpen}
          setWork={setWork}
          setHistory={setHistory}
          id={history ? history.length : null}
          create={create}
          setCreate={setCreate}
        />
      ) : null}
    </>
  );
};

export default DisplayWorkHistory;
