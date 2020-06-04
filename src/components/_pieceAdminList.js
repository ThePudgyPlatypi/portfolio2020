import React from "react";
import UpdateValueCheckbox from "./_udpateValueCheckbox";
import UpdateValueInput from "./_updateValueInput";
import UpdateValueText from "./_updateValueText";
import UpdateFileUpload from "./_updateFileUpload";
import UpdateImageGrid from "./_udpateImageGrid";
import UpdateRichText from "./_udpateRichText";
import GetKeyByValue from "../helpers/getKeyByValue";
import UpdateMultipleInput from "./_updateMultipleInput";
import { Grid, Typography } from "@material-ui/core";
import DeletePiece from "./_deletePiece";
import UpdateSelectInput from "../components/_updateSelectInput";

const PieceAdminList = ({ pieceItem, setPieces }) => {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <UpdateValueInput
            coll="pieces"
            id={pieceItem._id}
            keyVal={
              pieceItem.name ? GetKeyByValue(pieceItem, pieceItem.name) : "Name"
            }
            value={pieceItem.name ? pieceItem.name : ""}
          />
        </Grid>

        <Grid item xs={3}>
          <UpdateValueText
            coll="pieces"
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

        <Grid item xs={3}>
          <UpdateValueInput
            coll="pieces"
            id={pieceItem._id}
            keyVal={
              pieceItem.link ? GetKeyByValue(pieceItem, pieceItem.link) : "Link"
            }
            value={pieceItem.link ? pieceItem.link : ""}
          />
        </Grid>

        <Grid item xs={3}>
          <UpdateSelectInput
            coll="pieces"
            id={pieceItem._id}
            keyVal={
              pieceItem.category
                ? GetKeyByValue(pieceItem, pieceItem.category)
                : "Category"
            }
            selections={["Web", "Art", "Music"]}
            value={pieceItem.category ? pieceItem.category : ""}
          />
        </Grid>

        <Grid item xs={6}>
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
              <Typography variant="h6" align="center">
                Upload Thumbnail
              </Typography>
              <UpdateFileUpload
                coll="pieces"
                imageSRC={pieceItem.thumbnail ? pieceItem.thumbnail : ""}
                id={pieceItem._id}
                keyVal={
                  pieceItem.thumbnail
                    ? GetKeyByValue(pieceItem, pieceItem.thumbnail)
                    : "thumbnail"
                }
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={6}>
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
              <Typography variant="h6" align="center">
                Upload Header Image
              </Typography>
              <UpdateFileUpload
                coll="pieces"
                imageSRC={pieceItem.header ? pieceItem.header : ""}
                id={pieceItem._id}
                keyVal={
                  pieceItem.header
                    ? GetKeyByValue(pieceItem, pieceItem.header)
                    : "header"
                }
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6" align="center">
            Upload Images
          </Typography>
          <UpdateImageGrid
            coll="pieces"
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
            coll="pieces"
            id={pieceItem._id}
            keyVal={
              pieceItem.alt ? GetKeyByValue(pieceItem, pieceItem.alt) : "alt"
            }
            value={pieceItem.alt ? pieceItem.alt : ""}
          />
        </Grid>

        <Grid item xs={6}>
          <UpdateValueText
            coll="pieces"
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
            coll="pieces"
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
          <UpdateMultipleInput
            coll="pieces"
            id={pieceItem._id}
            keyVal={
              pieceItem.features
                ? GetKeyByValue(pieceItem, pieceItem.features)
                : "Features"
            }
            value={pieceItem.features ? pieceItem.features : []}
          />
        </Grid>

        <Grid item xs={6}>
          <UpdateValueCheckbox
            coll="pieces"
            id={pieceItem._id}
            keyVal="featured"
            value={pieceItem.featured ? pieceItem.featured : false}
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
