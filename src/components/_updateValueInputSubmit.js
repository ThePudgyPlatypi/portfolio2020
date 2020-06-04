import React, { useState, useEffect } from "react";
import updateField from "../helpers/updateField";
import {
  TextField,
  Button,
  Grid,
  Popover,
  Typography,
} from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  features: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  helperLink: {
    "& a": {
      fontSize: 12,
    },
  },
  btn: {
    maxWidth: "50%",
  },
  popover: {
    maxWidth: "300px",
    padding: theme.spacing(2),
  },
}));

const UpdateValueInputSubmit = ({ coll, id, keyVal, value, statePasser }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [updatedPiece, setUpdatedPiece] = useState(value);
  const [featureVal, setFeatureVal] = useState("");
  const [altVal, setAltVal] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [popOverDesc, setPopOverDesc] = useState("");

  let chipInputProps = {};

  const handleClick = () => {
    setUpdatedPiece((prevState) => [
      ...prevState,
      { feature: featureVal, alt: altVal },
    ]);
    document.getElementById(`${id}-value-input`).value = null;
    document.getElementById(`${id}-alt-input`).value = null;
    chipInputProps = {};
    setAltVal("");
  };

  function handleChipClick(...values) {
    const [target, value] = values;
    console.log(target);
    setOpen(true);
    setPopOverDesc(value);
    setAnchorEl(target);
  }

  function handleChipClose() {
    setOpen(false);
  }

  useEffect(() => {
    updateField(coll, id, keyVal, updatedPiece);
  }, [updatedPiece]);

  return (
    <>
      <div className={classes.root}>
        <div className={classes.features}>
          {Array.isArray(updatedPiece)
            ? updatedPiece.map(function (value, key) {
                if (value.alt.includes("icon-")) {
                  chipInputProps = {};
                  chipInputProps.icon = <Icon className={value.alt} />;
                } else if (
                  typeof value.alt === "string" &&
                  value.alt.length > 0
                ) {
                  chipInputProps = {};
                  // value.alt.replace('description:', '');
                  // value.alt.trim();
                  chipInputProps.onClick = (event) =>
                    handleChipClick(event.currentTarget, value.alt);
                } else {
                  chipInputProps = {};
                }

                return (
                  <Chip
                    key={key}
                    label={value.feature}
                    onDelete={() => {
                      setUpdatedPiece(
                        updatedPiece.filter(
                          (updatedPiece) => updatedPiece !== value
                        )
                      );
                    }}
                    variant="outlined"
                    {...chipInputProps}
                  />
                );
              })
            : "There are no features yet"}
        </div>
        <TextField
          id={`${id}-value-input`}
          label={keyVal}
          size="small"
          onChange={(event) => {
            setFeatureVal(event.target.value);
          }}
        />
        <TextField
          id={`${id}-alt-input`}
          label={`Alt - ${keyVal}`}
          size="small"
          onChange={(event) => {
            setAltVal(event.target.value);
          }}
        />
        <span className={classes.helperLink}>
          <a href="http://fizzed.com/oss/font-mfizz" target="_blank">
            For when you forget
          </a>
        </span>
        <Button
          className={classes.btn}
          variant="contained"
          color="primary"
          onClick={handleClick}
        >
          Submit
        </Button>

        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleChipClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Typography className={classes.popover}>{popOverDesc}</Typography>
        </Popover>
      </div>
    </>
  );
};

export default UpdateValueInputSubmit;
