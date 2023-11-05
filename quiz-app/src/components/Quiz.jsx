import { useCallback, useState } from 'react';
import QUESTIONS from '../questions.js';
import completeImg from '../assets/quiz-complete.png';
import QuestionTimer from './QuestionTimer.jsx';

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const curQuestionIndex = userAnswers.length;

  const handleAnswerSelect = useCallback(answer => {
    setUserAnswers(prevAnswers => [...prevAnswers, answer]);
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleAnswerSelect(answer),
    [handleAnswerSelect]
  );

  const quizIsOver = curQuestionIndex === QUESTIONS.length;

  if (quizIsOver)
    return (
      <div id="summary">
        <img src={completeImg} alt="trophy" />
        <h2>Quiz Completed!</h2>
      </div>
    );

  const shuffleAnswers = [...QUESTIONS[curQuestionIndex].answers];
  shuffleAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          timeout={10000}
          onTimeout={() => {
            handleAnswerSelect(null);
          }}
        />
        <h2>{QUESTIONS[curQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffleAnswers.map(answer => (
            <li key={answer} className="answer">
              <button onClick={handleSkipAnswer}>{answer}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
