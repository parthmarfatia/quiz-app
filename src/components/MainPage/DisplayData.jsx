function DisplayData(props) {
  const { quizData, optionSelectionClick } = props;
  const displayData = quizData.map((data, index) => {
    const { question, correct_answer, incorrect_answers, all_answers } = data;
    const displayOptions = all_answers.map((answer_option) => {
      return (
        <div
          className="choice"
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
