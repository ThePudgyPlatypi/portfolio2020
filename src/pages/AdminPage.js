import React, { useState, useEffect } from "react";
import FetchDataReturn from "../helpers/fetchDataReturn";
import PieceAdmin from "../components/_pieceAdmin";
import { Container, LinearProgress } from "@material-ui/core";
import AdminBar from "../components/_adminBar";
import InfoEditor from "../components/_infoEditor";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    paddingTop: 100,
  },
  strongCenter: {
    display: "block",
    textAlign: "center",
  },
}));

const AdminPage = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({ pieces: null, info: null });

  useEffect(() => {
    const getAll = async () => {
      const p = await FetchDataReturn("/api/pieces");
      const i = await FetchDataReturn("/api/info");
      setData({ pieces: p, info: i });
      setIsLoading(false);
    };

    getAll();
  }, []);

  return isLoading ? (
    <LinearProgress />
  ) : (
    <>
      <Container className={classes.root} maxWidth="lg">
        <AdminBar />

        <strong className={classes.strongCenter}>Resume and Page Editor</strong>
        <InfoEditor body={data.info[0]} />

        <strong className={classes.strongCenter}>Piece Editor</strong>
        <PieceAdmin pieces={data.pieces} setPieces={setData} />
      </Container>
    </>
  );
};

export default AdminPage;
