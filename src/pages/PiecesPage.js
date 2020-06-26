import React, { useState, useEffect } from "react";
import FetchData from "../helpers/fetchData";
import Gallery from "../components/_gallery";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: 75
  },
  container: {
    width: "80%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    margin: "auto",
  },
  title: {
    width: '50%',
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  }
}));

const PiecesPage = (props) => {
  const path = props.match.path;
  const name = path.slice(1, path.length);
  const [pieces, setPieces] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    FetchData(`/api/pieces/category/${name}`, setPieces, (body) => {
      console.log(body);
    });
  }, [name]);

  return pieces ? (
    <>
      <div className={classes.root}>
        <Grid container className={classes.container} spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h1">{name}</Typography>
          </Grid>
          <Grid item xs={12} className={classes.titleContainer}>
            <Typography variant="body1" className={classes.title}>
              
            </Typography>
          </Grid>
        </Grid>

        <Gallery images={pieces} />
      </div>
    </>
  ) : null;
};

export default PiecesPage;
