import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import UpdateRichText from "./_udpateRichText";
import UpdateMultipleInput from "./_updateMultipleInput";
import UpdateValueInput from "./_updateValueInput";
import FetchData from "../helpers/fetchData";
import GetKeyByValue from "../helpers/getKeyByValue";

const useStyles = makeStyles((theme) => ({
  root: {
    outline: "1px solid #f2f2f2",
    borderRadius: "5px",
    padding: "30px",
    marginBottom: "30px",
  },
}));

const InfoEditor = ({body}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="body1">First and Last Name</Typography>
          <UpdateValueInput
            coll="info"
            id={body._id}
            keyVal={body.name ? GetKeyByValue(body, body.name) : "Name"}
            value={body.name ? body.name : ""}
          />
          <Typography variant="body1">Home Page Introduction</Typography>
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
