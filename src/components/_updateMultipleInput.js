import React from "react";
import UpdateValueInputSubmit from "./_updateValueInputSubmit";

const UpdateMultipleInput = ({ coll, id, keyVal, value }) => {

  return (
    <>
      <UpdateValueInputSubmit coll={coll} id={id} keyVal={keyVal} value={value} />
    </>
  );
};

export default UpdateMultipleInput;
