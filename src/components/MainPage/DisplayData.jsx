function DisplayData(props) {
  const { quizData, optionSelectionClick } = props;
  const displayData = quizData.map((data, indexRow) => {
    const { question, correct_answer, incorrect_answers, all_answers } = data;
    const displayOptions = all_answers.map((answer_option, indexCol) => {
      return (
        <div
          className="choice"
          key={indexCol}
          onClick={() => optionSelectionClick(indexRow, indexCol)}
        >
          {answer_option.value}
        </div>
      );
    });
    return (
      <div key={indexRow}>
        <h4 className="question">{question}</h4>
        <div className="options">{displayOptions}</div>
        <hr className="line" />
      </div>
    );
  });
  return displayData;
}

export default DisplayData;
