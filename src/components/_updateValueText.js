import React, {useState} from 'react';
import UpdateField from "../helpers/updateField";
import { TextField } from "@material-ui/core";

const UpdateValueText = ({ id, keyVal, value }) => {
  const [updatedPiece, setUpdatedPiece] = useState(value);

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
        onBlur={() => {
          UpdateField(id, keyVal, updatedPiece);
        }}
      />
    </>
  );
};

export default UpdateValueText;
