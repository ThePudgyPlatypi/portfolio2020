import React from "react";
import UpdateValueCheckbox from "./_udpateValueCheckbox";
import UpdateValueInput from "./_updateValueInput";
import UpdateValueText from "./_updateValueText";
import UpdateFileUpload from "./_updateFileUpload";
import UpdateImageGrid from "./_udpateImageGrid";
import UpdateRichText from "./_udpateRichText";
import GetKeyByValue from "../helpers/getKeyByValue";
import UpdateMultipleInput from "./_updateMultipleInput";
import { Grid, Button } from "@material-ui/core";

const PieceAdminList = ({ pieceItem }) => {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <UpdateValueInput
            id={pieceItem._id}
            keyVal={pieceItem.name ? GetKeyByValue(pieceItem, pieceItem.name) : "Name"}
            value={pieceItem.name}
          />
        </Grid>

        <Grid item xs={6}>
          <UpdateValueText
            id={pieceItem._id}
            keyVal={pieceItem.title ? GetKeyByValue(pieceItem, pieceItem.title) : "Title"}
            value={pieceItem.title}
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
            <Grid item >
              <UpdateFileUpload imageSRC={pieceItem.images ? pieceItem.images : "" } />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <UpdateImageGrid images={ pieceItem.images ? pieceItem.images.list : []} />
        </Grid>

        <Grid item xs={6}>
          <UpdateValueText
            id={pieceItem._id}
            keyVal={pieceItem.alt ? GetKeyByValue(pieceItem, pieceItem.alt) : "alt"}
            value={pieceItem.alt}
          />
        </Grid>

        <Grid item xs={6}>
          <UpdateValueText
            id={pieceItem._id}
            keyVal={pieceItem.shortDescription ? GetKeyByValue(pieceItem, pieceItem.shortDescription) : "Short Description"}
            value={pieceItem.shortDescription}
          />
        </Grid>

        <Grid item xs={12}>
          <UpdateRichText
            id={pieceItem._id}
            keyVal={pieceItem.longDescription ? GetKeyByValue(pieceItem, pieceItem.longDescription) : "Long Description"}
            value={pieceItem.longDescription}
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
          />
        </Grid>

        <Grid item xs={12}>
          <Button>Delete</Button>
        </Grid>
      </Grid>
    </>
  );
};

export default PieceAdminList;
