import React, { useState, useEffect } from "react";
import {
  Button,
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
  Typography
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
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
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  icon: {
    color: "red",
  },
}));

const UpdateImageGrid = ({ coll, images, id, keyVal }) => {
  const classes = useStyles();
  const [imgFiles, setImgFiles] = useState([]);
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
        console.log(result);
        result.file.forEach((value, index, array) => {
          setThumbnails((prevState) => [
            ...prevState,
            `${process.env.REACT_APP_SERVER}${value.path.substring(6)}`,
          ]);
        });
      });
    }
  }, [uploads]);

  useEffect(() => {
    updateField(coll, id, keyVal, thumbnails, (body) => {
      console.log(`parent object after imageArr is stored: ${body}`);
    });
  }, [thumbnails]);

  return (
    <>
      <Grid
        container
        spacing={1}
        direction="column"
        justify="center"
        alignItems="center"
        alignContent="center"
        wrap="nowrap"
      >
        <Grid item className={classes.root} xs={12}>
          <GridList cellHeight={150} className={classes.gridList} cols={3}>
            {Array.isArray(thumbnails)
              ? thumbnails.map((value, key) => (
                  <GridListTile key={key} cols={1}>
                    <img src={value} alt="" />
                    <GridListTileBar
                      titlePosition="top"
                      actionIcon={
                        <IconButton
                          aria-label={`star`}
                          className={classes.icon}
                          onClick={() => {
                            setThumbnails(
                              thumbnails.filter(
                                (thumbnail) => thumbnail !== value
                              )
                            );
                          }}
                        >
                          <DeleteForeverIcon />
                        </IconButton>
                      }
                      actionPosition="left"
                      className={classes.titleBar}
                    />
                  </GridListTile>
                ))
              : []}
          </GridList>
        </Grid>
        <Grid
          container
          spacing={1}
          direction="column"
          justify="center"
          alignItems="center"
          alignContent="center"
          wrap="nowrap"
        >
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
              type="submit"
              component="span"
              onClick={(event) => {
                event.preventDefault();
                setUploads(imgFiles);
              }}
            >
              Upload
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default UpdateImageGrid;
