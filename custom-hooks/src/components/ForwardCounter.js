import useCounter from "../hooks/useCounter";

import Card from "./Card";

const ForwardCounter = () => {
  const counter = useCounter("plus");

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
