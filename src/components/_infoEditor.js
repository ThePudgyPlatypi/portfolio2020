import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import UpdateRichText from "./_updateRichText";
import UpdateValueInput from "./_updateValueInput";
import GetKeyByValue from "../helpers/getKeyByValue";
import UpdateValueInputSubmit from "./_updateValueInputSubmit";
import WorkHistory from "./_workHistory";
import UpdateFileUpload from "../components/_updateFileUpload";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > div > div": {
      padding: theme.spacing(2),
    },
    outline: "1px solid #f2f2f2",
    borderRadius: "5px",
    padding: "30px",
    marginBottom: "30px",
  },
  centerText: {
    textAlign: "center",
  },
  workHistory: {},
  resumeUpload: {
    display: 'flex',
    marginTop: 30,
    flexDirection: "column",
    alignItems: 'center',
  }
}));

const InfoEditor = ({ body }) => {
  const classes = useStyles();
  const [history, setHistory] = useState(body.history ? body.history : [{}]);

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={6}>
          <Grid container>
            <Grid item xs={12}>
              <UpdateValueInput
                coll="info"
                id={body._id}
                keyVal={body.name ? GetKeyByValue(body, body.name) : "Name"}
                value={body.name ? body.name : ""}
              />
            </Grid>
            <Grid item xs={12}>
              <UpdateValueInput
                coll="info"
                id={body._id}
                keyVal={body.email ? GetKeyByValue(body, body.email) : "Email"}
                value={body.email ? body.email : ""}
              />
            </Grid>
            <Grid item xs={12} className={classes.resumeUpload}>
              <Typography variant="body1">
                <strong>Resume Upload</strong>
              </Typography>
              <UpdateFileUpload
                coll="info"
                id={body._id}
                imageSRC={body.resume ? body.resume : ""}
                keyVal={
                  body.resume ? GetKeyByValue(body, body.resume) : "Resume"
                }
                accept="application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/pdf, text/plain"
                uploadTo="other"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <strong>
            Alt can be paragraph, icon or nothing. Will be modal click, font
            icon, or standard chip respectively.
          </strong>
          <UpdateValueInputSubmit
            coll="info"
            id={body._id}
            keyVal={body.skills ? GetKeyByValue(body, body.skills) : "skills"}
            value={body.skills ? body.skills : ""}
          />
        </Grid>
        <Grid item xs={12} className={classes.workHistory}>
          <Typography variant="body1">Add Work History</Typography>
          <WorkHistory
            id={body._id}
            history={history}
            setHistory={setHistory}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" className={classes.centerText}>
            Home Page Introduction
          </Typography>
          <UpdateRichText
            coll="info"
            id={body._id}
            keyVal={body.intro ? GetKeyByValue(body, body.intro) : "Intro"}
            value={body.intro ? body.intro : ""}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default InfoEditor;
