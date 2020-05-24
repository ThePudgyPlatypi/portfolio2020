import React, {useState, useEffect} from 'react';
import UpdateField from "../helpers/updateField";
import { TextField } from "@material-ui/core";
import FetchData from '../helpers/fetchData';

const UpdateValueText = ({ id, keyVal, value, setPieces }) => {
  const [updatedPiece, setUpdatedPiece] = useState(value);

  useEffect( () => {
      UpdateField(id, keyVal, updatedPiece);
      if(setPieces) {
        FetchData("/api/pieces", setPieces);
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
