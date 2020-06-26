import React from "react";
import FeaturedPiece from "../components/_featuredPiece";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  featuredLink: {
    color: "rgba(45, 49, 66, 1)",
    textDecoration: "none",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 35,

    "& > div": {
      borderRadius: 3,
      transition: "all .2s",
      width: "90%",
      padding: 5,

      [theme.breakpoints.up("sm")]: {
        width: "70%",
        padding: '5px 40px 20px 40px',
      },

      [theme.breakpoints.up("md")]: {
        width: "100%",
      },
      "&:hover": {
        transform: "scale(1.005)",
        boxShadow:
          "0 2px 1px rgba(0, 0, 0, 0.09), 0 4px 2px rgba(0, 0, 0, 0.09), 0 8px 4px rgba(0, 0, 0, 0.09), 0 16px 8px rgba(0, 0, 0, 0.09), 0 32px 16px rgba(0, 0, 0, 0.09)",
      },
    },
  },
}));

const FeaturedList = ({ featured }) => {
  const classes = useStyles();

  return (
    <>
      {featured ? featured.map((piece, key) => (
        <Link
          className={classes.featuredLink}
          key={key}
          to={`/piece/${piece.name}`}
        >
          <FeaturedPiece piece={piece} />
        </Link>
      )) : null}
    </>
  );
};

export default FeaturedList;
