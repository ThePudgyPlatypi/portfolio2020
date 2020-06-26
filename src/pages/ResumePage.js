import React, { useState, useEffect } from "react";
import FetchDataReturn from "../helpers/fetchDataReturn";
import {
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import WorkHistory from "../components/_workHistory";
import UpdateValueInputSubmit from "../components/_updateValueInputSubmit";
import DownloadResumeLink from "../components/_downloadResumeLink";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 75,
  },
  education: {
      marginBottom: 10
  },
  educationWrapper: {
      padding: [[10, 0, 10, 0]]
  },
  schoolDetails: {
      display: 'flex',
      justifyContent: "space-between"
  }
}));

const ResumePage = () => {
  const classes = useStyles();
  const [resume, setResume] = useState([]);

  useEffect(() => {
    const getAll = async () => {
      const i = await FetchDataReturn("/api/info");
      setResume(i);
    };
    getAll();
  }, []);

  return resume[0] ? (
    <Container>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Typography variant="h1">{resume[0].name}</Typography>
          <Grid container className={classes.contactSkills}>
            <Grid item xs={6}>
            <Typography variant="body1">
                <strong>Contact</strong>
              </Typography>
              <List className={classes.contactList} dense>
                <ListItem
                  button
                  component="a"
                  href={`mailto:${resume[0].email}`}
                >
                  <ListItemText primary={resume[0].email} />
                </ListItem>
                <DownloadResumeLink list />
              </List>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1">
                <strong>Professional Skills</strong>
              </Typography>
              <UpdateValueInputSubmit
                coll="info"
                id={resume[0]._id}
                keyVal="skills"
                value={resume[0].skills}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.education}>
          {/* Education info */}
          <Typography variant="body1">
            <strong>Education</strong>
          </Typography>
          <div className={classes.educationWrapper}>
            <span className={classes.schoolName}>
              The College of New Jersey
            </span>
            <Divider />
            <div className={classes.schoolDetails}>
              <div className={classes.schoolDetailsItem}>
                <span>Major:</span> Interactive Multimedia
              </div>
              <div className={classes.schoolDetailsItem}>
                <span>Degree:</span> Bachelors in Applied Science
              </div>
              <div className={classes.schoolDetailsItem}>
                <span>GPA:</span> 3.7
              </div>
            </div>
          </div>

          <div className={classes.educationWrapper}>
            <span className={classes.schoolName}>Camden County College</span>
            <Divider />
            <div className={classes.schoolDetails}>
              <div className={classes.schoolDetailsItem}>
                <span>Major:</span> Web Design and Development
              </div>
              <div className={classes.schoolDetailsItem}>
                <span>Degree:</span> Bachelors in Applied Science
              </div>
              <div className={classes.schoolDetailsItem}>
                <span>GPA:</span> 4.0
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          {/* Work History */}
          <Typography variant="body1">
            <strong>Work History</strong>
          </Typography>
          <WorkHistory
            id={resume[0]._id}
            history={resume[0].history}
            setHistory={null}
          />
        </Grid>
      </Grid>
    </Container>
  ) : null;
};

export default ResumePage;
