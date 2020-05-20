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

const PieceAdminListColumn = ({ pieceItem }) => {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <UpdateValueInput
            id={pieceItem._id}
            keyVal={GetKeyByValue(pieceItem, pieceItem.name)}
            value={pieceItem.name}
          />
        </Grid>

        <Grid item xs={6}>
          <UpdateValueText
            id={pieceItem._id}
            keyVal={GetKeyByValue(pieceItem, pieceItem.title)}
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
              <UpdateFileUpload imageSRC={pieceItem.images} />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <UpdateImageGrid images={pieceItem.images.list} />
        </Grid>

        <Grid item xs={6}>
          <UpdateValueText
            id={pieceItem._id}
            keyVal={GetKeyByValue(pieceItem, pieceItem.alt)}
            value={pieceItem.alt}
          />
        </Grid>

        <Grid item xs={6}>
          <UpdateValueText
            id={pieceItem._id}
            keyVal={GetKeyByValue(pieceItem, pieceItem.shortDescription)}
            value={pieceItem.shortDescription}
          />
        </Grid>

        <Grid item xs={12}>
          <UpdateRichText
            id={pieceItem._id}
            keyVal={GetKeyByValue(pieceItem, pieceItem.longDescription)}
            value={pieceItem.longDescription}
          />
        </Grid>

        <Grid item xs={6}>
          <UpdateMultipleInput features={pieceItem.features} />
        </Grid>

        <Grid item xs={6}>
          <UpdateValueCheckbox
            id={pieceItem._id}
            keyVal={GetKeyByValue(pieceItem, pieceItem.featured)}
            value={pieceItem.featured}
          />
        </Grid>

        <Grid item xs={12}>
          <button className="button alert">x</button>
        </Grid>
      </Grid>
    </>
  );
};

export default PieceAdminListColumn;
