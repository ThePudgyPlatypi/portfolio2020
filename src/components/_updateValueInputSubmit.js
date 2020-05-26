import React, { useState, useEffect } from "react";
import updateField from "../helpers/updateField";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";

const UpdateValueInputSubmit = ({ id, keyVal, value, statePasser }) => {
  const [updatedPiece, setUpdatedPiece] = useState(value);
  const [inputVal, setInputVal] = useState();
  const [features, setFeatures] = useState();

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
    updateField(id, keyVal, updatedPiece);
  }, [updatedPiece]);

  // useEffect(() => {

  // }, [features]);

  return (
    <>
      <div>
        <ul>
          {Array.isArray(updatedPiece)
            ? updatedPiece.map((value, key) => <li key={key}>{value}</li>)
            : "There are no features yet"}
        </ul>
        <TextField
          id={`${id}-value-input`}
          label={keyVal}
          variant="outlined"
          onChange={(event) => {
            setInputVal(event.target.value);
          }}
          onKeyPress={handleEnter}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleClick}
        >
          Submit
        </Button>
      </div>
    </>
  );
};

export default UpdateValueInputSubmit;
