const Answers = () => {
  return (
    <ul id="answers">
      {shuffleAnswers.current.map(answer => {
        const isSelected = userAnswers[userAnswers.length - 1] === answer;
        let cssClass = "";
        if (answerState === "answered" && isSelected) cssClass = "selected";
        if (
          (answerState === "correct" || answerState === "wrong") &&
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
  );
};

export default Answers;
