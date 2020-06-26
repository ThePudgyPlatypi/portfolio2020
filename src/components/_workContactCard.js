import React, { useState, useEffect } from "react";
import {
  List,
  ListItem,
  Avatar,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import LinkIcon from "@material-ui/icons/Link";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { makeStyles } from "@material-ui/core/styles";
import TitleCase from "../helpers/titleCase";
import { useAuth0 } from "../react-auth0-spa";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  contact: {
    outline: "1px solid rgba(0, 0, 0, 0.1)",
    maxWidth: "300px",
    padding: [["5px", "5px", 0, "5px"]],
    marginTop: "10px",
    marginBottom: 0,
    fontSize: "0.8rem",
  },
  contactTitle: {
    display: "flex",
    alignItems: "center",
    "& strong": {
      marginLeft: "10px",
    },
  },
  icon: {
    color: "rgba(0, 0, 0, 0.8)",
    zIndex: 100,
  },
  wrapperDiv: {
    display: "flex",
  },
}));

const WorkContactCard = ({
  data,
  avatar,
  admin = false,
  stateSetter = false,
}) => {
  const classes = useStyles();
  const [contact, setContact] = useState(data);
  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    setContact(data);
  }, [data]);

  const handleDelete = (value) => {
    let currentContact = contact.contact;
    let deleteContact = currentContact.filter(
      (currentContact) => currentContact !== value
    );
    stateSetter((prevState) => ({ ...prevState, contact: deleteContact }));
  };

  function linkType(item, type) {
    if (type === "phone") {
      return `tel:+${item}`;
    } else if (type === "email") {
      return `mailto:${item}`;
    } else {
      return item;
    }
  }

  function iconType(item, icon) {
    if (icon) {
      item = item.toLowerCase();
      if (item === "phone") {
        return <PhoneIcon />;
      } else if (item === "email") {
        return <EmailIcon />;
      } else {
        return <LinkIcon />;
      }
    } else {
      return null;
    }
  }

  return (
    <span className={classes.contact}>
      <div className={classes.contactTitle}>
        <Avatar alt={contact.company} src={avatar} />
        <strong>Contact Information</strong>
      </div>

      <List dense>
        {contact.contact
          ? contact.contact.map((value, key) => {
              if (value.text) {
                return (
                  <div key={key} className={classes.wrapperDiv}>
                    <ListItem
                      button
                      component="a"
                      href={linkType(value.data, value.type)}
                    >
                      {value.icon ? (
                        <ListItemIcon>
                          {iconType(value.type, value.icon)}
                        </ListItemIcon>
                      ) : null}
                      <ListItemText>{TitleCase(value.text)}</ListItemText>
                    </ListItem>
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
                );
              } else {
                return (
                  <div key={key} className={classes.wrapperDiv}>
                    <ListItem
                      button
                      component="a"
                      href={linkType(value.data, value.type)}
                      target="_blank"
                    >
                      <ListItemText>{value.data}</ListItemText>
                    </ListItem>
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
                );
              }
            })
          : null}
      </List>
    </span>
  );
};

export default WorkContactCard;
