function DisplayData(props) {
  const { quizData, optionSelectionClick, checkAnswerFlag } = props;
  const displayData = quizData.map((data, index) => {
    const { question, all_answers } = data;
    const displayOptions = all_answers.map((answer_option) => {
      let className;
      const { id, value, isHeld, isCorrect } = answer_option;
      if (checkAnswerFlag) {
        className = isCorrect
          ? "choice selected-correct"
          : isHeld
          ? "choice selected-incorrect"
          : "choice not-selected";
      } else {
        className = isHeld ? "choice selected" : "choice";
      }
      return (
        <div
          className={className}
          key={id}
          onClick={() => {
            !checkAnswerFlag && optionSelectionClick(id);
          }}
        >
          {value}
        </div>
      );
    });
    return (
      <div key={index}>
        <h4 className="question">{question}</h4>
        <div className="options">{displayOptions}</div>
        <hr className="line" />
      </div>
    );
  });
  return displayData;
}

export default DisplayData;
