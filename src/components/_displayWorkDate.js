import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 5,
  },
  date: {
    fontSize: "0.9rem",
  },
}));

const DisplayWorkDate = ({ date }) => {
  const classes = useStyles();

  return (
    <span className={classes.root}>
      <div className={classes.date}>
        <span className={classes.tenure}>Patina: </span>
        <span className={classes.startDate}>{date.startDate}</span>
        <span> -- </span>
        {date.currentlyEmployed ? (
          <span className={classes.endDate}>Current</span>
        ) : (
          <span className={classes.endDate}>{date.endDate}</span>
        )}
      </div>
    </span>
  );
};

export default DisplayWorkDate;
