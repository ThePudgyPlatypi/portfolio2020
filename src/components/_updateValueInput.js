import React, { useState, useEffect } from "react";
import UpdateField from "../helpers/updateField";
import { TextField } from "@material-ui/core";

const UpdateValueInput = ({ id, keyVal, value, statePasser }) => {
  const [updatedPiece, setUpdatedPiece] = useState(value);

  useEffect(() => {
    UpdateField(id, keyVal, updatedPiece);
  }, [updatedPiece]);

  return (
    <>
      <TextField
        id={id}
        label={keyVal}
        value={updatedPiece}
        variant="outlined"
        onChange={(event) => {
          statePasser ? statePasser(event.target.value) : setUpdatedPiece(event.target.value);
        }}
      />
    </>
  );
};

export default UpdateValueInput;
