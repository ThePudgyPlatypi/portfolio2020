import React, { useState, useEffect } from "react";
import { Button, Grid } from "@material-ui/core";
import updateField from "../helpers/updateField";
import { makeStyles } from "@material-ui/core/styles";
import DeleteServerImage from "../helpers/deleteServerImage";
import mime from "mime-types";

const useStyles = makeStyles((theme) => ({
  thumbnail: {
    maxHeight: 100,
    width: "auto",
    display: "block",
    margin: "0 auto",
  },
  customInput: {
    display: "block",
    margin: "0 auto",
  },
}));

const FileUpload = ({ coll, imageSRC, id, keyVal, accept = "image/*"}) => {
  const classes = useStyles();
  const [imgFile, setImgFile] = useState("");
  const [upload, setUpload] = useState(0);
  const [thumbnail, setThumbnail] = useState(imageSRC);
  const [defaultThumbnail, setDefaultThumbnail] = useState("");

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

  // set thumbnail of upload types that are not images or videos
  useEffect(() => {
    let fileType = mime.lookup(thumbnail);

    if (fileType) {
      let fileTypeArr = fileType.split("/");
      let mimeType = fileTypeArr[0];
      let extension = fileTypeArr[1];

      function checkMimeTypeIconExists(file, type, callback) {
        let defaults = {
          audio: "mp3.svg",
          image: "jpg.svg",
          application: "doc.svg",
          video: "mov.svg",
          default: "html.svg",
        };

        let image = new Image();
        image.src = `/images/mime-type-icons/${file}.svg`;
        image.onload = () => {
          console.log("Image does exists");
          callback(image.src);
        };
        image.onerror = () => {
          console.log("Image does not exist");
          callback(`/images/mime-type-icons/${defaults[type]}`);
        };
      }

      if (mimeType === "application" || mimeType === "audio") {
        checkMimeTypeIconExists(extension, mimeType, (result) =>
          setDefaultThumbnail(result)
        );
      } else {
        console.log("No File Yet");
      }
    }
  }, [thumbnail]);

  const handleUpload = (event) => {
    event.preventDefault();
    if (thumbnail) {
      DeleteServerImage(thumbnailGetFileName(thumbnail));
    }
    setUpload(imgFile);
  };

  const thumbnailGetFileName = (path) => {
      let url = path;
      let stringCutStart = url.split("/");
      let imageFileName = stringCutStart[stringCutStart.length - 1];
      return imageFileName;
  }

  useEffect(() => {
    if (upload) {
      let formData = new FormData();
      formData.append("file", upload);
      postData(`/api/upload`, formData, (result) => {
        let path = result.file[0].path;
        let image = `${process.env.REACT_APP_SERVER}${path.substring(6)}`;
        setThumbnail(`${process.env.PUBLIC_URL}${image}`);
        updateField(coll, id, keyVal, image, (body) => {
          console.log(body);
        });
      });
    }
  }, [upload, coll, id, keyVal]);

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          {defaultThumbnail ? <p>{thumbnailGetFileName(thumbnail)}</p> : null}
          <img
            className={classes.thumbnail}
            src={defaultThumbnail ? defaultThumbnail : thumbnail}
            alt=""
          />
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
              className="customInput"
              accept={accept}
              id="select"
              type="file"
              name="file"
              onChange={(event) => {
                setImgFile(event.target.files[0]);
              }}
            />
            <Button
              className="customInput"
              variant="contained"
              type="submit"
              color="primary"
              component="span"
              onClick={(event) => {
                handleUpload(event);
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

export default FileUpload;
