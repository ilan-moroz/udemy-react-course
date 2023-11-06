import { useCallback, useState } from 'react';
import QUESTIONS from '../questions.js';
import completeImg from '../assets/quiz-complete.png';
import Question from './Question.jsx';

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const curQuestionIndex = userAnswers.length;
  const quizIsOver = curQuestionIndex === QUESTIONS.length;

  const handleAnswerSelect = useCallback(answer => {
    setUserAnswers(prevAnswers => [...prevAnswers, answer]);
  }, []);

  const handleSkipAnswer = useCallback(() => {
    handleAnswerSelect(null);
  }, [handleAnswerSelect]);

  if (quizIsOver)
    return (
      <div id='summary'>
        <img src={completeImg} alt='trophy' />
        <h2>Quiz Completed!</h2>
      </div>
    );

  return (
    <div id='quiz'>
      <Question
        key={curQuestionIndex}
        index={curQuestionIndex}
        onSelectAnswer={handleAnswerSelect}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
};

export default Quiz;
