import React, { useState } from "react";
import UpdateField from "../helpers/updateField";
import { Switch } from "@material-ui/core";

const UpdateValueCheckbox = ({ id, keyVal, value }) => {
  const [check, setCheck] = useState(value);

  return (
    <>
      <p>Featured?</p>
      <div>
        <Switch
          checked={check}
          id={`${id}-yes-no`}
          onChange={(event) => {
            setCheck(!check);
            UpdateField(id, keyVal, !check);
          }}
          name="featuredSwitch"
          inputProps={{ "aria-label": "secondary checkbox" }}
        ></Switch>
      </div>
    </>
  );
};

export default UpdateValueCheckbox;
