import React, { useState, useEffect } from "react";
import UpdateField from "../helpers/updateField";
import { TextField } from "@material-ui/core";

const UpdateValueInput = ({coll, id, keyVal, value, statePasser }) => {
  const [updatedPiece, setUpdatedPiece] = useState(value);

  useEffect(() => {
    UpdateField(coll, id, keyVal, updatedPiece);
  }, [updatedPiece]);

  return (
    <>
      <TextField
        id={`${id}-${keyVal}`}
        label={keyVal}
        value={updatedPiece}
        size="small"
        onChange={(event) => {
          statePasser ? statePasser(event.target.value) : setUpdatedPiece(event.target.value);
        }}
      />
    </>
  );
};

export default UpdateValueInput;
