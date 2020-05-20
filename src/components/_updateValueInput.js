import React, { useState } from "react";
import UpdateField from "../helpers/updateField";
import { TextField } from "@material-ui/core";

const UpdateValueInput = ({ id, keyVal, value }) => {
  const [updatedPiece, setUpdatedPiece] = useState(value);

  return (
    <>
      <TextField
        id={id}
        label={keyVal}
        value={updatedPiece}
        variant="outlined"
        onChange={(event) => {
          setUpdatedPiece(event.target.value);
        }}
        onBlur={() => {
          UpdateField(id, keyVal, updatedPiece);
        }}
      />
    </>
  );
};

export default UpdateValueInput;
