import React, { useState, useEffect } from "react";
import FetchData from "../helpers/fetchData";
import PieceAdmin from "../components/_pieceAdmin";
import { Box } from "@material-ui/core";

const AdminPage = ({ match }) => {
  // will need to be able to add/delete/update pieces and all the content involved with them
  // need to be able to update basic information on each page
  // will need to be able to update skills and resume stuff
  //   const name = match.params.name;
  const [isLoading, setIsLoading] = useState(true);
  const [pieces, setPieces] = useState([]);

  useEffect(() => {
    FetchData("/api/pieces", setPieces);
    setIsLoading(false);
  }, []);

  return isLoading ? <Box>Loading...</Box> : <PieceAdmin pieces={pieces} setPieces={setPieces} />;
};

export default AdminPage;
