import { useCallback, useRef, useState } from 'react';
import QUESTIONS from '../questions.js';
import completeImg from '../assets/quiz-complete.png';
import QuestionTimer from './QuestionTimer.jsx';
import Answers from './Answers.jsx';

const Quiz = () => {
  const shuffleAnswers = useRef();
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

  if (!shuffleAnswers.current) {
    shuffleAnswers.current = [...QUESTIONS[curQuestionIndex].answers];
    shuffleAnswers.current.sort(() => Math.random() - 0.5);
  }
  return (
    <div id='quiz'>
      <div id='question'>
        <QuestionTimer
          timeout={15000}
          onTimeout={handleSkipAnswer}
          key={curQuestionIndex}
        />
        <h2>{QUESTIONS[curQuestionIndex].text}</h2>
        <Answers />
      </div>
    </div>
  );
};

export default Quiz;
