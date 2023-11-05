import { useState } from 'react';
import QUESTIONS from '../questions.js';

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const curQuestionIndex = userAnswers.length;

  const handleAnswerSelect = answer => {
    setUserAnswers(prevAnswers => [...prevAnswers, answer]);
  };

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[curQuestionIndex].text}</h2>
        <ul id="answers">
          {QUESTIONS[curQuestionIndex].answers.map(answer => (
            <li key={answer} className="answer">
              <button onClick={() => handleAnswerSelect(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
