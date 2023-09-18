import React from "react";

const Demo = props => {
  return <p>{props.show ? "This is new!" : ""}</p>;
};

export default React.memo(Demo);
