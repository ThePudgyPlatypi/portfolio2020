import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Link, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "80%",
    height: "100%",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  gridList: {
    display: "flex",
  },
  imgWrap: {
    height: 500,
    transition: "all .2s",
    borderRadius: 3,
    position: "relative",

    "&:hover": {
      transform: "scale(1.005)",
      boxShadow:
        "0 2px 1px rgba(0, 0, 0, 0.09), 0 4px 2px rgba(0, 0, 0, 0.09), 0 8px 4px rgba(0, 0, 0, 0.09), 0 16px 8px rgba(0, 0, 0, 0.09), 0 32px 16px rgba(0, 0, 0, 0.09)",

      "& $overlay": {
        opacity: 1,
        visibility: "visible",
        transform: "scale(1.005)",
      },

      "& $img": {
        transform: "scale(1.005)",
      },
    },
  },
  img: {
    objectFit: "cover",
    borderRadius: 3,
    width: "100%",
    height: "100%",
    transition: "all .2s",
  },
  link: {
    display: "block",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "75%",
    bottom: 0,
    background: "linear-gradient(0deg, rgba(255,255,255,1) 61%, rgba(255,255,255,0) 100%)",
    filter:
      'progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#ffffff",GradientType=1)',
    opacity: 0,
    visibility: "hidden",
    transition: "all .2s",
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",

    "& p": {
      padding: [[0, 25, 50, 25]],
    },

    "& h4": {
      padding: [[0, 25, 0, 25]],
    },

    "& p, & h4": {
      color: theme.palette.text.primary,
    },
  },
}));

const Gallery = ({ images }) => {
  const classes = useStyles();

  return images ? (
    <div>
      <Grid container direction="row" spacing={2} className={classes.root}>
        {images.map((value, key) => (
          <Grid className={classes.gridList} item key={key} sm={6} md={4}>
            <Link
              className={classes.link}
              key={key}
              href={`/piece/${value.name}`}
            >
              <div className={classes.imgWrap}>
                <img
                  className={classes.img}
                  src={value.header}
                  alt={value.title}
                />
                <div className={classes.overlay}>
                  <Typography variant="h4">{value.title}</Typography>
                  <Typography variant="body1">
                    {value.shortDescription}
                  </Typography>
                </div>
              </div>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  ) : null;
};

export default Gallery;
