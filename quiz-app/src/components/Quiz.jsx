import { useCallback, useState } from 'react';
import QUESTIONS from '../questions.js';
import completeImg from '../assets/quiz-complete.png';
import QuestionTimer from './QuestionTimer.jsx';

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
          timeout={15000}
          onTimeout={handleSkipAnswer}
          key={curQuestionIndex}
        />
        <h2>{QUESTIONS[curQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffleAnswers.map(answer => {
            const isSelected = userAnswers[userAnswers.length - 1] === answer;
            let cssClass = '';
            if (answerState === 'answered' && isSelected) cssClass = 'selected';
            if (
              (answerState === 'correct' || answerState === 'wrong') &&
              isSelected
            )
              cssClass = answerState;
            return (
              <li key={answer} className="answer">
                <button
                  onClick={() => handleAnswerSelect(answer)}
                  className={cssClass}
                >
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
