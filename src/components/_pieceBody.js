import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import UpdateValueInputSubmit from "../components/_updateValueInputSubmit";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    background: "white",
    maxWidth: "100%",
    borderRadius: 3,

    [theme.breakpoints.up("md")]: {
      maxWidth: "50%",
      marginLeft: "calc(50% - 100px)",
      marginTop: "-25vh",
      padding: "50px",
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

  function descriptionSet() {
    return { __html: description };
  }

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

      <div className={classes.features}>
        {features ? (
          <UpdateValueInputSubmit
            coll="pieces"
            id={null}
            keyVal="features"
            value={features}
          />
        ) : null}
      </div>
      <Typography
        variant="body1"
        id="long-description"
        dangerouslySetInnerHTML={descriptionSet()}
      ></Typography>
    </div>
  );
};

export default PieceBody;
