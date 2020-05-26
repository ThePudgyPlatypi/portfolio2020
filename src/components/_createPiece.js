import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import FetchData from "../helpers/fetchData";

const UpdateValueInput = ({ setPieces }) => {
  const [newPiece, setNewPiece] = useState("");

  const handleClick = (event) => {
    createPiece();
  };

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      handleClick(event);
    }
  }

  const createPiece = async () => {
    const result = await fetch(`/api/pieces/add-piece`, {
      method: "post",
      body: JSON.stringify({ name: newPiece }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(result);
    FetchData("/api/pieces", setPieces);
    setNewPiece("");
  };

  return (
    <>
      <TextField
        label="Enter Name"
        variant="outlined"
        value={newPiece}
        onChange={(event) => {
          setNewPiece(event.target.value);
        }}
        onKeyPress={handleEnter}
      />
      <Button variant="contained" onClick={handleClick}>
        Add Piece
      </Button>
    </>
  );
};

export default UpdateValueInput;
