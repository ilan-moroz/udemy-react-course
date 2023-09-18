import React from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";
import Demo from "./components/Demo/Demo";

function App() {
  const [show, setShow] = React.useState(false);

  const togglePHandler = () => {
    setShow(prev => !prev);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Demo show={false} />
      <Button onClick={togglePHandler}>Toggle P!</Button>
    </div>
  );
}

export default App;
