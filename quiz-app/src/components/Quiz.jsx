import { useCallback, useState } from 'react';
import QUESTIONS from '../questions.js';
import Question from './Question.jsx';
import Summary from './Summary.jsx';

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

  if (quizIsOver) return <Summary userAnswers={userAnswers} />;

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
