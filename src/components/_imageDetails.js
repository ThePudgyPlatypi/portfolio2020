import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Select,
  InputLabel,
  MenuItem,
} from "@material-ui/core";

const ImageDetails = ({ open, setOpen, target, setThumbnails }) => {
  const [details, setDetails] = useState({ alt: "", cols: 1, order: null });

  useEffect(() => {
    setDetails({
      alt: target && target.details ? target.details.alt : "",
      cols: target && target.details ? target.details.cols : 1,
      order: target && target.details ? target.details.order : null,
    });
  }, [target]);

  const handleClose = (event) => {
    if (event === "submit") {
      setThumbnails((prevState) => {
        // map prevState, add details to existing image, return new array of objects
        let newState = prevState.map((value, key) => {
          if (value.images === target.images) {
            value.details = details;
          }
          return value;
        });
        return newState;
      });
      setOpen(false);
    } else {
      setOpen(false);
    }
  };

  const handleChange = (event, child) => {
    let id = "";
    if (child) {
      id = child.props.id;
    } else {
      id = event.target.getAttribute("id");
    }
    let value = event.target.value;
    setDetails((prevState) => ({ ...prevState, [id]: value }));
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Image Details</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Fill in the optional fields to make this image a better image.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="alt"
          label="Alt Text"
          value={details.alt}
          fullWidth
          onChange={(event) => {
            handleChange(event);
          }}
        />

        <InputLabel id="colSelect">
          How many columns to take up in Display Grid
        </InputLabel>
        <Select
          labelId="colSelect"
          value={details.cols}
          size="small"
          onChange={(event, child) => {
            handleChange(event, child);
          }}
          fullWidth
        >
          {[...Array(12).keys()]
            .map((i) => i + 1)
            .map((value, key) => (
              <MenuItem id="cols" key={key} value={value}>
                {value}
              </MenuItem>
            ))}
        </Select>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            handleClose("cancel");
          }}
          color="primary"
        >
          Forget about it
        </Button>
        <Button
          onClick={() => {
            handleClose("submit");
          }}
          color="primary"
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ImageDetails;
