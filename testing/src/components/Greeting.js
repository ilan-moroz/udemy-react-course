import { useState } from 'react';
import Output from './Output';

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(prev => !prev);
  };

  return (
    <>
      <h2>hello world!</h2>
      {!changedText && <Output>Its nice to see u</Output>}
      {changedText && <Output>Changed😉</Output>}
      <button onClick={changeTextHandler}>Change Text!</button>
    </>
  );
};

export default Greeting;
