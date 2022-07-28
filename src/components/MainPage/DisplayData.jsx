function DisplayData(props) {
  const { quizData } = props;
  const displayData = quizData.map((data, index) => {
    const { question, correct_answer, incorrect_answers } = data;
    const all_answers = [...incorrect_answers];
    all_answers.splice(Math.floor(Math.random() * 4), 0, correct_answer);
    const displayOptions = all_answers.map((ans, index) => {
      return (
        <div className="choice" key={index}>
          {ans}
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
