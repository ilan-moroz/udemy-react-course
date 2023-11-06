import { useState } from 'react';

import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import { log } from './log.js';
import ConfigCounter from './components/Counter/ConfigCounter.jsx';

function App() {
  log('<App /> rendered');

  const [chosenCount, setChosenCount] = useState(0);

  const setCount = newCount => {
    setChosenCount(newCount);
  };

  return (
    <>
      <Header />
      <main>
        <ConfigCounter onSet={setCount} />
        <Counter initialCount={chosenCount} key={Math.random() * 1000} />
      </main>
    </>
  );
}

export default App;
