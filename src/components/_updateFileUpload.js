import React, { useState, useEffect } from "react";
import { Button, Grid } from "@material-ui/core";
import updateField from "../helpers/updateField";

const FileUpload = ({ imageSRC, id, keyVal }) => {
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
    if(upload) {
      let formData = new FormData();
    formData.append("file", upload);
    postData(`/api/upload`, formData, (result) => {
      let path = result.file[0].path;
      let image = `${process.env.REACT_APP_SERVER}${path.substring(6)}`;
      setThumbnail(`${process.env.PUBLIC_URL}${image}`);
      updateField(id, "thumbnail", image, (body) => {
        console.log(body);
      });
    });
    }
  }, [upload]);

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <img src={thumbnail} alt="Piece Thumbnail" />
        </Grid>

        <Grid item xs={12}>
          <input
            accept="image/*"
            id="select"
            type="file"
            name="file"
            onChange={(event) => {
              setImgFile(event.target.files[0]);
            }}
          />

          <Button
            variant="contained"
            color="primary"
            component="span"
            onClick={(event) => {
              setUpload(imgFile);
            }}
          >
            Upload
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default FileUpload;
