import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Box } from "@material-ui/core";
import UpdateRichText from "./_udpateRichText";
import UpdateMultipleInput from "./_updateMultipleInput";
import UpdateValueInput from "./_updateValueInput";
import FetchData from "../helpers/fetchData";
import GetKeyByValue from "../helpers/getKeyByValue";
import UpdateValueInputSubmit from "./_updateValueInputSubmit";

const useStyles = makeStyles((theme) => ({
  root: {
    outline: "1px solid #f2f2f2",
    borderRadius: "5px",
    padding: "30px",
    marginBottom: "30px",
  },
  centerText: {
    textAlign: "center",
  },
}));

const InfoEditor = ({ body }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={6}>
          <UpdateValueInput
            coll="info"
            id={body._id}
            keyVal={body.name ? GetKeyByValue(body, body.name) : "Name"}
            value={body.name ? body.name : ""}
          />
        </Grid>
        <Grid item xs={6}>
          <strong>
            Alt can be paragraph, icon or nothing. Will be modal click, font icon, or standard chip respectively.
          </strong>
          <UpdateValueInputSubmit
            coll="info"
            id={body._id}
            keyVal={body.skills ? GetKeyByValue(body, body.skills) : "Skills"}
            value={body.skills ? body.skills : ""}
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
