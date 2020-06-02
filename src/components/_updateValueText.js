import React, { useState, useEffect } from "react";
import UpdateField from "../helpers/updateField";
import { TextField } from "@material-ui/core";
import FetchData from "../helpers/fetchData";

const UpdateValueText = ({ coll, id, keyVal, value, setPieces }) => {
  const [updatedPiece, setUpdatedPiece] = useState(value);

  useEffect(() => {
    UpdateField(coll, id, keyVal, updatedPiece);
    if (keyVal === "Title") {
      document.getElementById(`${id}-title`).textContent = updatedPiece;
    }
  }, [updatedPiece]);

  return (
    <>
      <TextField
        id={id}
        multiline
        fullWidth
        label={keyVal}
        value={updatedPiece}
        variant="outlined"
        onChange={(event) => {
          setUpdatedPiece(event.target.value);
        }}
      />
    </>
  );
};

export default UpdateValueText;
