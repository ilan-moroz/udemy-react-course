import { useState } from 'react';

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(prev => !prev);
  };

  return (
    <>
      <h2>hello world!</h2>
      {!changedText && <p>Its nice to see u</p>}
      {changedText && <p>Changed😉</p>}
      <button onClick={changeTextHandler}>Change Text!</button>
    </>
  );
};

export default Greeting;
