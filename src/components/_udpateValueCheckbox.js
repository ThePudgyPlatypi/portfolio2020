import React, { useState, useEffect } from "react";
import UpdateField from "../helpers/updateField";
import { Switch } from "@material-ui/core";
import FetchData from '../helpers/fetchData';

const UpdateValueCheckbox = ({ id, keyVal, value, setPieces }) => {
  const [check, setCheck] = useState(value);

  useEffect(() => {
    UpdateField(id, keyVal, check);
    if(setPieces) {
      FetchData("/api/pieces", setPieces);
    }
  }, [check]);

  return (
    <>
      <p>Featured?</p>
      <div>
        <Switch
          checked={check}
          id={`${id}-yes-no`}
          onChange={(event) => {
            setCheck(!check);
          }}
          name="featuredSwitch"
          inputProps={{ "aria-label": "secondary checkbox" }}
        ></Switch>
      </div>
    </>
  );
};

export default UpdateValueCheckbox;
