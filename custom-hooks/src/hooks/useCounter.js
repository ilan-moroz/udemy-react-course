import React from "react";

const useCounter = method => {
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prevCounter =>
        method === "plus" ? prevCounter + 1 : prevCounter - 1
      );
    }, 100);

    return () => clearInterval(interval);
  }, [method]);

  return counter;
};

export default useCounter;
