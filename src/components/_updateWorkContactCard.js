import React, { useState } from "react";
import WorkContactCard from "./_workContactCard";
import {
  Typography,
  FormControl,
  InputLabel,
  Select,
  FormGroup,
  Button,
  MenuItem,
  FormControlLabel,
  Checkbox,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  contact: {},
  contactCard: {
    display: "flex",
    flexDirection: "column",
  },
  contactForm: {
    minWidth: 120,
  },
  twoInputs: {
    display: "flex",
  },
}));

const UpdateWorkContactCard = ({ work, setWork, id }) => {
  const classes = useStyles();
  const [contact, setContact] = useState({
    type: "",
    text: "",
    icon: false,
    data: "",
  });

  const handleChange = (event, value) => {
    const e = event.target;
    setContact((prevState) => ({
      ...prevState,
      [value]: e.value,
    }));
  };

  const addContact = () => {
    setWork((prevState) => {
      if (!prevState.contact) {
        prevState.contact = [];
      }
      return { ...prevState, contact: [...prevState.contact, contact] };
    });
    setContact({
      type: "",
      text: "",
      icon: false,
      data: "",
    });
  };

  return (
    <>
      <div className={classes.contactCard}>
        <WorkContactCard
          data={work}
          avatar={work.avatar ? work.avatar : null}
          admin={true}
          stateSetter={setWork}
        />
      </div>
      <div id="contact">
        <Typography variant="h6">Contact Information</Typography>
        <div className={classes.twoInputs}>
          <FormControl className={classes.contactForm}>
            <InputLabel id="contact-type">Type</InputLabel>
            <Select
              labelId="contact-type"
              id="contact-type-select"
              value={contact.type}
              onChange={(event) => handleChange(event, "type")}
            >
              <MenuItem value={"email"}>E-Mail</MenuItem>
              <MenuItem value={"phone"}>Phone</MenuItem>
              <MenuItem value={"link"}>Link</MenuItem>
            </Select>
          </FormControl>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={contact.icon ? contact.icon : false}
                  onChange={() =>
                    setContact((prevState) => ({
                      ...prevState,
                      icon: !contact.icon,
                    }))
                  }
                  name="contactIcon"
                />
              }
              label="Use Icon"
            />
          </FormGroup>
        </div>
        <TextField
          label="Text"
          value={contact.text}
          id={`${id}-text`}
          helperText="Text to be displayed."
          fullWidth
          size="small"
          onChange={(event) => handleChange(event, "text")}
        />
        <TextField
          label="Data"
          value={contact.data}
          id={`${id}-data`}
          helperText="Link, Phone, or Email address only"
          fullWidth
          size="small"
          onChange={(event) => handleChange(event, "data")}
        />
        <Button variant="contained" color="primary" onClick={addContact}>
          Add
        </Button>
      </div>
    </>
  );
};

export default UpdateWorkContactCard;
