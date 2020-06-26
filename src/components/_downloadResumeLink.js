import React, { useState, useEffect } from "react";
import FetchData from "../helpers/fetchData";
import { ListItem, ListItemText } from "@material-ui/core";

const DownloadResumeLink = ({ list = false }) => {
  const [resume, setResume] = useState("");

  useEffect(() => {
    FetchData("api/info", setResume);
  }, []);

  return list ? (
    <ListItem
      button
      component="a"
      href={resume[0] ? resume[0].resume : null}
    >
      <ListItemText primary="Download Resume" />
    </ListItem>
  ) : (
    <a href={resume[0] ? resume[0].resume : null}>Download Resume</a>
  );
};

export default DownloadResumeLink;
