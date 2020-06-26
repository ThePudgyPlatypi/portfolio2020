import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  TextField,
  Button,
} from "@material-ui/core";
import WorkIcon from "@material-ui/icons/Work";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { makeStyles } from "@material-ui/core/styles";
import { useAuth0 } from "../react-auth0-spa";

const useStyles = makeStyles((theme) => ({
  dutyWrapper: {
    margin: [[0, 10, 10, 10]],
  },
  dutyInput: {
    width: "100%",
  },
  dutyButton: {
    marginTop: theme.spacing(2),
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  dutyTextWrapper: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
}));

const UpdateWorkDuty = ({ work, setWork, admin = false, keyValue="duties" }) => {
  const { isAuthenticated } = useAuth0();
  const classes = useStyles();
  const [duty, setDuties] = useState("");

  const addDuty = () => {
    setWork((prevState) => {
      if (!prevState[keyValue]) {
        prevState[keyValue] = [];
      }
      return { ...prevState, [keyValue]: [...prevState[keyValue], duty] };
    });
    setDuties("");
  };

  const handleEnter = (event, clickHandler) => {
    if (event.key === "Enter") {
      clickHandler(event);
    }
  };

  const handleDelete = (value) => {
    let object = work.duties;
    let del = object.filter((object) => object !== value);

    setWork((prevState) => ({ ...prevState, [keyValue]: del }));
  };

  return (
    <>
      <strong>Responsibilites</strong>
      <div className={classes.dutyWrapper}>
        <List className={classes.dutyList}>
          {work.duties
            ? work.duties.map((value, key) => (
                <ListItem key={key}>
                  <ListItemAvatar>
                    <Avatar>
                      <WorkIcon className={classes.small} />
                    </Avatar>
                  </ListItemAvatar>
                  <div className={classes.dutyTextWrapper}>
                    <ListItemText primary={value} />
                    {isAuthenticated && admin ? (
                      <IconButton
                        aria-label={`delete`}
                        className={classes.icon}
                        onClick={() => handleDelete(value)}
                      >
                        <DeleteForeverIcon />
                      </IconButton>
                    ) : null}
                  </div>
                </ListItem>
              ))
            : null}
        </List>
        {isAuthenticated && admin ? (
          <>
            <TextField
              id="dutyText"
              label="Responsibility"
              className={classes.dutyInput}
              value={duty}
              onChange={(event) => setDuties(event.target.value)}
              onKeyPress={(event) => handleEnter(event, addDuty)}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={addDuty}
              className={classes.dutyButton}
            >
              Add
            </Button>
          </>
        ) : null}
      </div>
    </>
  );
};

export default UpdateWorkDuty;
