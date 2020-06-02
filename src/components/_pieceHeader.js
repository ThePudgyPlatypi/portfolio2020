import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  pieceHeader: {
    width: '100%',
    height: '50vh',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  },
}));

const PieceHeader = ({ background }) => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container>
      <Grid item xs={12}>
        <div
          className={classes.pieceHeader}
          style={{ backgroundImage: `url(${background})` }}
        ></div>
      </Grid>
    </Grid>
  );
};

export default PieceHeader;
