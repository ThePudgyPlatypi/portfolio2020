import React from "react";
import { Button } from "@material-ui/core";
import FetchDataReturn from "../helpers/fetchDataReturn";

const DeletePiece = ({ name, setPieces }) => {
  const deletePiece = async () => {
    const result = await fetch(`/api/pieces/delete-piece`, {
      method: "delete",
      body: JSON.stringify({ name: name }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(result);
    const fetchNSet = await FetchDataReturn("/api/pieces");
    setPieces((prevState) => ({...prevState, pieces: fetchNSet}));
  };

  return <Button onClick={(event) => deletePiece()}>Delete</Button>;
};

export default DeletePiece;
