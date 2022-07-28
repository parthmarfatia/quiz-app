import { useState, useEffect } from "react";
import DummyData from "./DummyData";

function ApiCall() {
  const [quizData, setQuizData] = useState(DummyData);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&category=19&type=multiple")
      .then((res) => res.json())
      .then((data) => setQuizData(data.results));
  }, []);
  return quizData;
}

export default ApiCall;
