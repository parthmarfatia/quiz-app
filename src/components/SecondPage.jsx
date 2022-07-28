import { useState, useEffect } from "react";

function SecondPage() {
  const dummyArray = new Array(5).fill({});
  const dummyData = dummyArray.map((arr) => {
    return {
      question: "",
      correct_answer: "",
      incorrect_answers: new Array(4),
    };
  });

  const [quizData, setQuizData] = useState(dummyData);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&category=19&type=multiple")
      .then((res) => res.json())
      .then((data) => setQuizData(data.results));
  }, []);

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

  return (
    <div className="secondpage">
      {displayData}
      <div className="footer">
        {false && (
          <h4 className="display-score">You scored 3/5 correct answers</h4>
        )}
        <button className="check-button">Check answers</button>
      </div>
    </div>
  );
}

export default SecondPage;
