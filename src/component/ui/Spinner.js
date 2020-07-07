import React from "react";
import spinner from "../../img/spinner.gif";

const Spinner = () => {
  return (
    <div>
      <img
        src={spinner}
        style={{ width: "200px", margin: "auto", display: "block" }}
      ></img>
    </div>
  );
};

export default Spinner;
