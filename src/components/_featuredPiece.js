import React from "react";
import {
  Grid,
  Typography,
  CardMedia,
} from "@material-ui/core";
import {  makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  featured_image: {
    height: 200,
    objectFit: 'contain',
  },
});

const FeaturedPiece = ({ piece }) => {
  const classes = useStyles();

  if (piece.featured) {
    return (
      <>
        <Grid container spacing={4} alignItems="center">
          <Grid item md={5} xs={12}>
            <CardMedia
              className={classes.featured_image}
              component="img"
              title={piece.alt}
              image={piece.thumbnail ? piece.thumbnail : "" }
            />
          </Grid>

          <Grid item md={7} xs={12}>
            <Typography variant="h6" color="initial">
              {piece.title}
            </Typography>
            <Typography variant="body2" color="initial">
              {piece.shortDescription}
            </Typography>
          </Grid>
        </Grid>
      </> )
  } else {
    return null;
  }
};

export default FeaturedPiece;
