import React, { useState, useEffect } from "react";
import { Button, Grid, GridList, GridListTile } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import updateField from "../helpers/updateField";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
}));

const UpdateImageGrid = ({ images, id, keyVal }) => {
  const classes = useStyles();
  const [imgFiles, setImgFiles] = useState("");
  const [uploads, setUploads] = useState(0);
  const [thumbnails, setThumbnails] = useState(images);

  let postData = async (url, value, callback) => {
    const body = await fetch(url, {
      method: "post",
      body: value,
    });

    const result = await body.json();

    if (callback) {
      callback(result);
    }
  };

  useEffect(() => {
    if (uploads) {
      let formData = new FormData();

      for (var x = 0; x < uploads.length; x++) {
        formData.append("file", uploads[x]);
      }

      postData(`/api/upload`, formData, (result) => {
        if (uploads) {
          let paths = thumbnails;
          result.file.forEach((value, index) => {
            paths.push(
              `${process.env.REACT_APP_SERVER}${value.path.substring(6)}`
            );
          });
          let images = paths;
          console.log(images);
          updateField(id, "images", images);
        }
      });
    }
  }, [uploads]);

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <GridList cellHeight={160} className={classes.gridList} cols={3}>
            {Array.isArray(thumbnails)
              ? thumbnails.map((name, index) => (
                  <GridListTile key={index} cols={1}>
                    <img src={name} alt="" />
                  </GridListTile>
                ))
              : ""}
          </GridList>
        </Grid>

        <Grid item xs={12}>
          <input
            accept="image/*"
            multiple
            id="select"
            type="file"
            name="file"
            onChange={(event) => {
              setImgFiles(event.target.files);
            }}
          />

          <Button
            variant="contained"
            color="primary"
            component="span"
            onClick={(event) => {
              setUploads(imgFiles);
            }}
          >
            Upload
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default UpdateImageGrid;
