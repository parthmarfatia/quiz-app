import { useEffect, useState } from "react";
import DisplayData from "./MainPage/DisplayData";
import Footer from "./MainPage/Footer";
import ApiCall from "./MainPage/ApiCall";
import DummyData from "./MainPage/DummyData";

function MainPage() {
  const [apiValue, setApiValue] = useState(0);
  const dataApi = ApiCall(apiValue);
  const [quizData, setQuizData] = useState(dataApi);
  const [checkAnswerFlag, setCheckAnswerFlag] = useState(false);
  const [score, setScore] = useState(0);
  const [baseData, setBaseData] = useState([]);

  useEffect(() => {
    setBaseData(dataApi);
  }, []);

  useEffect(() => {
    setQuizData(dataApi);
  }, [dataApi[0].question]);

  function optionSelectionClick(id) {
    setQuizData((prevData) => {
      const newData = prevData.map((data) => {
        const { all_answers } = data;
        const answerSelected = all_answers.map((answers) => {
          if (answers.id[0] === id[0]) {
            if (answers.id === id) {
              return { ...answers, isHeld: !answers.isHeld };
            } else {
              return { ...answers, isHeld: false };
            }
          } else {
            return { ...answers };
          }
        });
        return { ...data, all_answers: answerSelected };
      });
      return newData;
    });
  }

  function checkAnswers() {
    setCheckAnswerFlag(true);
    quizData.map((data) => {
      const { all_answers } = data;
      all_answers.map((option) => {
        const { isHeld, isCorrect } = option;
        if (isHeld && isCorrect) {
          setScore((s) => s + 1);
        }
      });
    });
  }

  function playAgain() {
    setQuizData(baseData);
    setCheckAnswerFlag(false);
    setScore(0);
    setApiValue((val) => val + 1);
  }

  return (
    <div className="mainpage">
      <DisplayData
        quizData={quizData}
        optionSelectionClick={optionSelectionClick}
        checkAnswerFlag={checkAnswerFlag}
      />
      <Footer
        checkAnswers={checkAnswers}
        score={score}
        checkAnswerFlag={checkAnswerFlag}
        playAgain={playAgain}
      />
    </div>
  );
}

export default MainPage;
