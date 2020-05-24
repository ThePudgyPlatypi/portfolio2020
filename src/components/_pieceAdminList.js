import React from "react";
import UpdateValueCheckbox from "./_udpateValueCheckbox";
import UpdateValueInput from "./_updateValueInput";
import UpdateValueText from "./_updateValueText";
import UpdateFileUpload from "./_updateFileUpload";
import UpdateImageGrid from "./_udpateImageGrid";
import UpdateRichText from "./_udpateRichText";
import GetKeyByValue from "../helpers/getKeyByValue";
import UpdateMultipleInput from "./_updateMultipleInput";
import { Grid } from "@material-ui/core";
import DeletePiece from "./_deletePiece";

const PieceAdminList = ({ pieceItem, setPieces }) => {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <UpdateValueInput
            id={pieceItem._id}
            keyVal={
              pieceItem.name ? GetKeyByValue(pieceItem, pieceItem.name) : "Name"
            }
            value={pieceItem.name ? pieceItem.name : ""}
          />
        </Grid>

        <Grid item xs={6}>
          <UpdateValueText
            id={pieceItem._id}
            keyVal={
              pieceItem.title
                ? GetKeyByValue(pieceItem, pieceItem.title)
                : "Title"
            }
            value={pieceItem.title ? pieceItem.title : ""}
            setPieces={setPieces}
          />
        </Grid>

        <Grid item xs={12}>
          <Grid
            container
            spacing={1}
            direction="row"
            justify="center"
            alignItems="center"
            alignContent="center"
            wrap="nowrap"
          >
            <Grid item>
              <UpdateFileUpload
                imageSRC={pieceItem.thumbnail ? pieceItem.thumbnail : ""}
                id={pieceItem._id}
                keyVal={
                  pieceItem.thumbnail
                    ? GetKeyByValue(pieceItem, pieceItem.thumbnail)
                    : "images"
                }
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <UpdateImageGrid
            images={pieceItem.images ? pieceItem.images : []}
            id={pieceItem._id}
            keyVal={
              pieceItem.images
                ? GetKeyByValue(pieceItem, pieceItem.images)
                : "images"
            }
          />
        </Grid>

        <Grid item xs={6}>
          <UpdateValueText
            id={pieceItem._id}
            keyVal={
              pieceItem.alt ? GetKeyByValue(pieceItem, pieceItem.alt) : "alt"
            }
            value={pieceItem.alt ? pieceItem.alt : ""}
          />
        </Grid>

        <Grid item xs={6}>
          <UpdateValueText
            id={pieceItem._id}
            keyVal={
              pieceItem.shortDescription
                ? GetKeyByValue(pieceItem, pieceItem.shortDescription)
                : "Short Description"
            }
            value={pieceItem.shortDescription ? pieceItem.shortDescription : ""}
          />
        </Grid>

        <Grid item xs={12}>
          <UpdateRichText
            id={pieceItem._id}
            keyVal={
              pieceItem.longDescription
                ? GetKeyByValue(pieceItem, pieceItem.longDescription)
                : "Long Description"
            }
            value={pieceItem.longDescription ? pieceItem.longDescription : ""}
          />
        </Grid>

        <Grid item xs={6}>
          <UpdateMultipleInput features={pieceItem.features} />
        </Grid>

        <Grid item xs={6}>
          <UpdateValueCheckbox
            id={pieceItem._id}
            keyVal="featured"
            value={pieceItem.featured ? pieceItem.featured : false}
            setPieces={setPieces}
          />
        </Grid>

        <Grid item xs={12}>
          <DeletePiece
            name={pieceItem.name}
            setPieces={setPieces}
          ></DeletePiece>
        </Grid>
      </Grid>
    </>
  );
};

export default PieceAdminList;
