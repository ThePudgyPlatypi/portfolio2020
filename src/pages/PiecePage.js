import React, { useState, useEffect } from "react";
import FetchData from "../helpers/fetchData";
import jQuery from "jquery";
import {
  Container,
  Grid,
  GridList,
  GridListTile,
  Typography,
  Chip,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LanguageIcon from "@material-ui/icons/Language";
import PieceHeader from "../components/_pieceHeader";
import PieceBody from "../components/_pieceBody";
import PieceImageGrid from "../components/_pieceImageGrid";

const useStyles = makeStyles((theme) => ({}));

const PiecePage = ({ match }) => {
  const classes = useStyles();
  const name = match.params.name;
  const [piece, setPiece] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    FetchData(`/api/piece/${name}`, (body) => {
      setPiece(body);
      setIsLoading(false);
    });
  }, [name]);

  return isLoading ? (
    <div className="loading">Loading...</div>
  ) : (
    <>
      <PieceHeader background={piece.header} />
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <PieceBody
              title={piece.title}
              link={piece.link}
              description={piece.longDescription}
              features={piece.features}
            />
          </Grid>
        </Grid>
      </Container>

      <PieceImageGrid images={piece.images} />
    </>
  );
};

export default PiecePage;
