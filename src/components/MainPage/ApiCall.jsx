import { useState, useEffect } from "react";
import DummyData from "./DummyData";

function ApiCall() {
  const [quizData, setQuizData] = useState(DummyData);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&category=19&type=multiple")
      .then((res) => res.json())
      .then((data) => setQuizData(data.results));
  }, []);

  const modifiedQuizData = quizData.map((data, indexRow) => {
    const { question, correct_answer, incorrect_answers } = data;
    const all_answers = [...incorrect_answers];
    all_answers.splice(Math.floor(Math.random() * 4), 0, correct_answer);
    const all_answers_modified = all_answers.map((answer, indexCol) => {
      return {
        value: answer,
        isHeld: false,
        isCorrect: answer === correct_answer,
        id: "" + indexRow + indexCol,
      };
    });

    return {
      ...data,
      all_answers: all_answers_modified,
    };
  });

  return modifiedQuizData;
}

export default ApiCall;
