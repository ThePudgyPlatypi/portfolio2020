import React from "react";
import PieceAdminList from "./_pieceAdminList";
import { Grid } from "@material-ui/core";
import CreatePiece from "./_createPiece";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const PieceAdmin = ({ pieces }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Container maxWidth="lg">
        {pieces.map((piece, key) => (
          <ExpansionPanel
            key={key}
            expanded={expanded === `${piece._id}`}
            onChange={handleChange(`${piece._id}`)}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${piece._id}-content`}
              id={`${piece._id}-header`}
            >
              <Typography className={classes.heading}>{piece.title}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <PieceAdminList pieceItem={piece} />
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
        <Grid container>
          <CreatePiece></CreatePiece>
        </Grid>
      </Container>
    </>
  );
};

export default PieceAdmin;
