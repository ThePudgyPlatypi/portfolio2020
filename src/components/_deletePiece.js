import React from 'react';
import { Button } from '@material-ui/core';
import FetchData from '../helpers/fetchData';

const DeletePiece = ({name, setPieces}) => {

    const deletePiece = async () => {
        const result = await fetch(`/api/pieces/delete-piece`, {
          method: "delete",
          body: JSON.stringify({name: name}),
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log(result);
        FetchData("/api/pieces", setPieces);
      };

    return (
        <Button onClick={ (event) => deletePiece() }>Delete</Button>
    )
}

export default DeletePiece;