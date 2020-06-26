import React, { useState, useEffect } from "react";
import UpdateField from "../helpers/updateField";
import { TextField } from "@material-ui/core";

const UpdateValueText = ({
  coll,
  id,
  keyVal,
  value,
  stateSetter = function () {},
  submit = false,
  helper = null,
}) => {
  const [updatedPiece, setUpdatedPiece] = useState(value);
  let options = { helperText: helper };

  useEffect(() => {
    if (submit) {
      stateSetter((prevState) => ({ ...prevState, [keyVal]: updatedPiece }));
    } else {
      UpdateField(coll, id, keyVal, updatedPiece);
      if (keyVal === "Title") {
        document.getElementById(`${id}-title`).textContent = updatedPiece;
      }
    }
  }, [updatedPiece, coll, id, keyVal, stateSetter, submit]);

  return (
    <>
      <TextField
        id={`${id}-${keyVal}`}
        multiline
        fullWidth
        label={keyVal}
        value={updatedPiece}
        size="small"
        onChange={(event) => {
          setUpdatedPiece(event.target.value);
        }}
        {...options}
      />
    </>
  );
};

export default UpdateValueText;
