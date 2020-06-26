import React from "react";
import { GridList } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import UpdateImageGrid from "../components/_updateImageGrid";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
  },
  imgSize: {
    maxWidth: "100%",
    height: "auto",
  },
}));

const PieceImageGrid = ({ images }) => {
  const classes = useStyles();

  return images ? (
    <GridList className={classes.root} cellHeight="auto" cols={3}>
      <UpdateImageGrid
        coll="pieces"
        images={images}
        id={null}
        keyVal="images"
      />
    </GridList>
  ) : null;
};

export default PieceImageGrid;
