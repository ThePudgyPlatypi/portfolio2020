import React, { useState, useEffect } from "react";
import UpdateField from "../helpers/updateField";
import { Switch } from "@material-ui/core";
import FetchData from '../helpers/fetchData';

const UpdateValueCheckbox = ({coll, id, keyVal, value, setPieces }) => {
  const [check, setCheck] = useState(value);

  useEffect(() => {
    UpdateField(coll, id, keyVal, check);
    if(setPieces) {
      FetchData("/api/pieces", setPieces);
    }
  }, [coll, id, keyVal, setPieces, check]);

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
