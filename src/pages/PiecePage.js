import React, { useState, useEffect } from "react";
import FetchData from "../helpers/fetchData";
import jQuery from "jquery";
import {
  Container,
  Grid,
  GridList,
  GridListTile,
  Typography,
  Chip,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LanguageIcon from '@material-ui/icons/Language';

const useStyles = makeStyles((theme) => ({
  switchStackOne: {
    order: 2,
    [theme.breakpoints.up("md")]: {
      order: 1,
    },
  },
  switchStackTwo: {
    order: 1,
    [theme.breakpoints.up("md")]: {
      order: 2,
    },
  },
  imgSize: {
    maxWidth: "100%",
    height: "auto",
  },
  features: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

const PiecePage = ({ match }) => {
  const classes = useStyles();
  const name = match.params.name;
  // const piece = content[1].pieces.find(piece => piece.name === name);
  const [piece, setPiece] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    FetchData(`/api/piece/${name}`, (body) => {
      setPiece(body);
      setIsLoading(false);
      document.getElementById("long-description").innerHTML =
        body.longDescription;
    });
  }, [name]);
  // parse HTML from tinyMCE

  return isLoading ? (
    <div className="loading">Loading...</div>
  ) : (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} className={classes.switchStackOne}>
            <GridList cellHeight="auto" cols={2}>
              {piece.images.map((value, key) => (
                <GridListTile key={key} cols={1}>
                  <img className={classes.imgSize} src={value} alt="image" />
                </GridListTile>
              ))}
            </GridList>
          </Grid>
          <Grid item xs={12} md={6} className={classes.switchStackTwo}>
            <Typography variant="h1" gutterBottom>
              {piece.title}
            </Typography>
            <div className={classes.features}>
              {piece.features.map((value, key) => (
                <Chip key={key} label={value} color="primary" />
              ))}
            </div>
            {piece.link ? <a href={piece.link}><Typography variant='h6'>Vist</Typography></a> : null}
            <Typography variant="body1" id="long-description"></Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default PiecePage;
