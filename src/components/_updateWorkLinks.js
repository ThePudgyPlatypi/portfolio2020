import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, Chip, TextField, Button } from "@material-ui/core";
import { useAuth0 } from "../react-auth0-spa";

const useStyles = makeStyles((theme) => ({
  linksWrapper: {
    margin: [[0, 10, 10, 10]],
  },
  linksInput: {
    width: "50%",
  },
}));

const UpdateWorkLinks = ({ work, setWork, admin = false }) => {
  const { isAuthenticated } = useAuth0();
  const classes = useStyles();
  const [links, setLinks] = useState({ title: "", link: "" }); // set any portfolio links

  const addLink = () => {
    let value = "links";
    if (!work.links) {
      work.links = [];
    }
    setWork((prevState) => ({
      ...prevState,
      [value]: [...prevState[value], links],
    }));

    setLinks({ title: "", link: "" });
  };

  const handleChange = (event, name) => {
    let value = event.target.value;

    setLinks((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDelete = (value) => {
    let object = work.links;
    let del = object.filter((object) => object !== value);
    setWork((prevState) => ({ ...prevState, links: del }));
  };
  //   let adminProps = isAuthenticated && admin ? { onDelete: handleDelete } : null;

  return (
    <>
      <strong>Portfolio Links</strong>
      <div className={classes.linksWrapper}>
        <List className={classes.linksList}>
          {work.links
            ? work.links.map((value, key) => {
                if (isAuthenticated && admin) {
                  return (
                    <Chip
                      key={key}
                      label={value.title}
                      onClick={() => (window.location.href = value.link)}
                      onDelete={() => handleDelete(value)}
                    />
                  );
                } else {
                  return (
                    <Chip
                      key={key}
                      label={value.title}
                      onClick={() => (window.location.href = value.link)}
                    />
                  );
                }
              })
            : null}
        </List>
        {isAuthenticated && admin ? (
          <>
            <TextField
              id="linkTitle"
              label="Link Title"
              value={links.title}
              onChange={(event) => handleChange(event, "title")}
              className={classes.linksInput}
            />
            <TextField
              id="linkURL"
              label="Link URL"
              value={links.link}
              onChange={(event) => handleChange(event, "link")}
              helperText="this is a relative link"
              className={classes.linksInput}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={addLink}
              className={classes.linksButton}
            >
              Add
            </Button>
          </>
        ) : null}
      </div>
    </>
  );
};

export default UpdateWorkLinks;
