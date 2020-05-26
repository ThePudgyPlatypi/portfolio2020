import React, { useState, useEffect } from "react";
import UpdateValueInputSubmit from "./_updateValueInputSubmit";
import updateField from "../helpers/updateField";
import Icon from "@material-ui/core/Icon";

const UpdateMultipleInput = ({ id, keyVal, value }) => {

  return (
    <>
     
      <UpdateValueInputSubmit id={id} keyVal={keyVal} value={value} />
    </>
  );
};

export default UpdateMultipleInput;
