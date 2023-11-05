import { useEffect } from 'react';
import { useState } from 'react';

const QuestionTimer = ({ timeout, onTimeout }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log('timeout');
    setTimeout(onTimeout, timeout);
  }, [onTimeout, timeout]);

  useEffect(() => {
    console.log('interval');
    setInterval(() => {
      setRemainingTime(prevTime => prevTime - 100);
    }, 100);
  }, []);

  return <progress id="question-timer" max={timeout} value={remainingTime} />;
};

export default QuestionTimer;
