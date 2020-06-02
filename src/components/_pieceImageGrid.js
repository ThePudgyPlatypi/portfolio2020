import React from "react";
import { Grid, GridList, GridListTile } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%'
  },
  imgSize: {
    maxWidth: "100%",
    height: "auto",
  },
}));

const PieceImageGrid = ({ images }) => {
  const classes = useStyles();

  return (
    <GridList className={classes.root} cellHeight="auto" cols={3}>
      {images.map((value, key) => (
        <GridListTile key={key} cols={1}>
          <img className={classes.imgSize} src={value} alt="image" />
        </GridListTile>
      ))}
    </GridList>
  );
};

export default PieceImageGrid;
