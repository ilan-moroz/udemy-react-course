import { useCallback, useState } from 'react';
import QUESTIONS from '../questions.js';
import completeImg from '../assets/quiz-complete.png';
import Question from './Question.jsx';

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const [answerState, setAnswerState] = useState('');

  const curQuestionIndex =
    answerState === '' ? userAnswers.length : answerState.length - 1;
  const quizIsOver = curQuestionIndex === QUESTIONS.length;

  const handleAnswerSelect = useCallback(
    answer => {
      setAnswerState('answered');
      setUserAnswers(prevAnswers => [...prevAnswers, answer]);

      setTimeout(() => {
        if (answer === QUESTIONS[curQuestionIndex].answers[0])
          setAnswerState('correct');
        else setAnswerState('wrong');

        setTimeout(() => {
          setAnswerState('');
        }, 2000);
      }, 1000);
    },
    [curQuestionIndex]
  );

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
        questionText={QUESTIONS[curQuestionIndex].text}
        answers={QUESTIONS[curQuestionIndex].answers}
        onSelectAnswer={handleAnswerSelect}
        selectedAnswer={userAnswers[userAnswers.length - 1]}
        answerState={answerState}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
};

export default Quiz;
