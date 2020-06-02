import React, { useEffect } from "react";
import { Grid, Typography, Chip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    background: "white",
    maxWidth: "100%",
    borderRadius: 3,

    [theme.breakpoints.up("md")]: {
      maxWidth: "50%",
      marginLeft: 'calc(50% - 100px)',
      marginTop: '-25vh',
      padding: '50px'
    },
  },
  features: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

const PieceBody = ({ title, features, link, description }) => {
  const classes = useStyles();

  useEffect(() => {
    document.getElementById("long-description").innerHTML = description;
  }, []);

  return (
    <div className={classes.root}>
      <Typography variant="h1" gutterBottom>
        {title}
      </Typography>
      {link ? (
        <a href={link}>
          <Typography variant="h6">Vist</Typography>
        </a>
      ) : null}
      <strong>Featured Tech's</strong>
      <div className={classes.features}>
        {features.map((value, key) => (
          <Chip key={key} label={value} color="primary" />
        ))}
      </div>
      <Typography variant="body1" id="long-description"></Typography>
    </div>
  );
};

export default PieceBody;
