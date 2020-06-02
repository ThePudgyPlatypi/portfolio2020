import React, { useState, useEffect } from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import updateField from "../helpers/updateField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  thumbnail: {
    maxWidth: 200,
    height: "auto",
    display: "block",
    margin: "0 auto",
  },
  customInput: {
    display: "block",
    margin: "0 auto",
  },
}));

const FileUpload = ({coll, imageSRC, id, keyVal}) => {
  const classes = useStyles();
  const [imgFile, setImgFile] = useState("");
  const [upload, setUpload] = useState(0);
  const [thumbnail, setThumbnail] = useState(imageSRC);

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
  }, [upload]);

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <img className={classes.thumbnail} src={thumbnail} alt="" />
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
              accept="image/*"
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
                event.preventDefault();
                setUpload(imgFile);
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
