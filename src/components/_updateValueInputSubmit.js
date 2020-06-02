import React, { useState, useEffect } from "react";
import updateField from "../helpers/updateField";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  icon: {
    color: "red",
  },
}));

const UpdateValueInputSubmit = ({ coll, id, keyVal, value, statePasser }) => {
  const classes = useStyles();
  const [updatedPiece, setUpdatedPiece] = useState(value);
  const [inputVal, setInputVal] = useState();

  const handleClick = (event) => {
    setUpdatedPiece((prevState) => [...prevState, inputVal]);
    document.getElementById(`${id}-value-input`).value = "";
  };

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      handleClick(event);
    }
  };

  useEffect(() => {
    updateField(coll, id, keyVal, updatedPiece);
  }, [updatedPiece]);

  // useEffect(() => {

  // }, [features]);

  return (
    <>
      <div>
        <div className={classes.root}>
          {Array.isArray(updatedPiece)
            ? updatedPiece.map((value, key) => (
                <Chip
                  key={key}
                  label={value}
                  onDelete={() => {
                    setUpdatedPiece(
                      updatedPiece.filter(
                        (updatedPiece) => updatedPiece !== value
                      )
                    );
                  }}
                  variant="outlined"
                />
              ))
            : "There are no features yet"}
        </div>
        <TextField
          id={`${id}-value-input`}
          label={keyVal}
          variant="outlined"
          onChange={(event) => {
            setInputVal(event.target.value);
          }}
          onKeyPress={handleEnter}
        />
        <Button variant="contained" color="primary" onClick={handleClick}>
          Submit
        </Button>
      </div>
    </>
  );
};

export default UpdateValueInputSubmit;
