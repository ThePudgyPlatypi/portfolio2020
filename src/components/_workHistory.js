import React from "react";
import DisplayWorkHistory from "./_displayWorkHistory";

const WorkHistory = ({ id, history, setHistory }) => {
  return (
    <>
      <DisplayWorkHistory
        history={history}
        setHistory={setHistory}
        id={id}
      />
    </>
  );
};

export default WorkHistory;
