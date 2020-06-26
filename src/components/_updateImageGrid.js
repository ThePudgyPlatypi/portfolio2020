import React, { useState, useEffect } from "react";
import {
  Button,
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import InfoIcon from "@material-ui/icons/Info";
import { makeStyles } from "@material-ui/core/styles";
import updateField from "../helpers/updateField";
import ImageDetails from "./_imageDetails";
import DeleteServerImage from "../helpers/deleteServerImage";
import { useAuth0 } from "../react-auth0-spa";
import { SRLWrapper } from "simple-react-lightbox";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    overflow: "hidden",
  },
  gridList: {
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  icon: {
    color: "rgba(237, 237, 237, 0.8)",
  },
  gridImage: {
    // maxHeight: 500,
    // width: 'auto',
  },
}));

const UpdateImageGrid = ({ coll, images, id, keyVal }) => {
  const { isAuthenticated } = useAuth0();
  const classes = useStyles();
  const [imgFiles, setImgFiles] = useState([{}]);
  const [uploads, setUploads] = useState(0);
  const [thumbnails, setThumbnails] = useState(images);
  const [imageDetails, setImageDetails] = useState();
  const [open, setOpen] = useState(false);
  const [imageDelete, setImageDelete] = useState("");

  // image detail functions
  const handleImageDelete = (value) => {
    let url = value.images;
    let stringCutStart = url.split("/");
    let imageFileName = stringCutStart[stringCutStart.length - 1];

    setThumbnails(thumbnails.filter((thumbnail) => thumbnail !== value));
    setImageDelete(imageFileName);
  };

  const handleClickOpen = (value) => {
    setImageDetails(value);
    setOpen(true);
  };

  // Does what it says
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

  // posting up the selected files
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
            {
              images: `${process.env.REACT_APP_SERVER}${value.path.substring(
                6
              )}`,
            },
          ]);
        });
      });
    }
  }, [uploads]);

  // updating the actual page so i can see the new image
  useEffect(() => {
    if (isAuthenticated && window.location.pathname === "/cs-admin") {
      updateField(coll, id, keyVal, thumbnails, (body) => {
        let element = document.getElementById("selectMultipleImages");
        if (element) {
          element.value = "";
        }
      });

      if (imageDelete) {
        setImageDelete("");
      }
    }
  }, [thumbnails, coll, id, keyVal, isAuthenticated, imageDelete]);

  useEffect(() => {
    if (imageDelete) {
      DeleteServerImage(imageDelete);
    }
  }, [imageDelete]);

  return (
    <>
      <Grid item className={classes.root} xs={12}>
        <SRLWrapper>
          <GridList
            cellHeight={500}
            className={classes.gridList}
            cols={5}
          >
            {Array.isArray(thumbnails)
              ? thumbnails.map((value, key) => (
                  <GridListTile
                    key={key}
                    cols={value.details ? value.details.cols : 1}
                  >
                    <img
                      src={value.images}
                      alt={value.details ? value.details.alt : ""}
                      className={classes.gridImage}
                    />

                    {isAuthenticated &&
                    window.location.pathname === "/cs-admin" ? (
                      <GridListTileBar
                        titlePosition="top"
                        actionIcon={
                          <>
                            <IconButton
                              aria-label={`delete`}
                              className={classes.icon}
                              onClick={() => {
                                handleImageDelete(value);
                              }}
                            >
                              <DeleteForeverIcon />
                            </IconButton>

                            <IconButton
                              aria-label={`information`}
                              className={classes.icon}
                              onClick={() => {
                                handleClickOpen(value);
                              }}
                            >
                              <InfoIcon />
                            </IconButton>
                          </>
                        }
                        actionPosition="left"
                        className={classes.titleBar}
                      />
                    ) : null}
                  </GridListTile>
                ))
              : []}
          </GridList>
        </SRLWrapper>
      </Grid>
      {isAuthenticated && window.location.pathname === "/cs-admin" ? (
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
            <Grid item xs={12}>
              <input
                accept="image/*"
                multiple
                id="selectMultipleImages"
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
          <ImageDetails
            open={open}
            setOpen={setOpen}
            target={imageDetails}
            setThumbnails={setThumbnails}
          />
        </>
      ) : null}
    </>
  );
};

export default UpdateImageGrid;
