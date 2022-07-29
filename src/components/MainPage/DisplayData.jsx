function DisplayData(props) {
  const { quizData, optionSelectionClick, checkAnswerFlag } = props;
  const displayData = quizData.map((data, index) => {
    const { question, all_answers } = data;
    const displayOptions = all_answers.map((answer_option) => {
      const className = answer_option.isHeld ? "choice selected" : "choice";
      return (
        <div
          className={className}
          key={answer_option.id}
          onClick={() => optionSelectionClick(answer_option.id)}
        >
          {answer_option.value}
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
