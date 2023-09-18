import React from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";
import Demo from "./components/Demo/Demo";

function App() {
  const [show, setShow] = React.useState(false);
  const [toggle, setToggle] = React.useState(false);

  const togglePHandler = React.useCallback(() => {
    if (toggle) setShow(prev => !prev);
  }, [toggle]);

  const allowToggleHandler = () => {
    setToggle(prev => !prev);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Demo show={show} />
      <Button onClick={allowToggleHandler}>Allow toggle!</Button>
      <Button onClick={togglePHandler}>Toggle P!</Button>
    </div>
  );
}

export default App;
