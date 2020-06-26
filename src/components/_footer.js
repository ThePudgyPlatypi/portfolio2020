import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DownloadResumeLink from "../components/_downloadResumeLink";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "5vh",
    backgroundColor: theme.palette.text.primary,
    display: 'flex',
    justifyContent: 'center',
    color: 'white'
  },
  footerWrapper: {
      padding: 10,

      "& a": {
          color: 'white'
      }
  }
}));

const Footer = () => {
  const classes = useStyles();
  const year = new Date().getFullYear()

  return (
    <div className={classes.root}>
      <div className={classes.footerWrapper}>
        <Typography variant="body1">&copy; Copyright {year} Chris Stehm | <DownloadResumeLink list={false}/></Typography>
      </div>
    </div>
  );
};

export default Footer;
