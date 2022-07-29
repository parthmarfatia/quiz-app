import { useEffect, useState } from "react";
import DisplayData from "./MainPage/DisplayData";
import Footer from "./MainPage/Footer";
import ApiCall from "./MainPage/ApiCall";
import DummyData from "./MainPage/DummyData";

function SecondPage() {
  const dataApi = ApiCall();
  const [quizData, setQuizData] = useState(dataApi);
  useEffect(() => {
    setQuizData(dataApi);
  }, [dataApi[0].question]);
  const [checkAnswerFlag, setCheckAnswerFlag] = useState(false);

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
  }

  return (
    <div className="mainpage">
      <DisplayData
        quizData={quizData}
        optionSelectionClick={optionSelectionClick}
        checkAnswerFlag={checkAnswerFlag}
      />
      <Footer quizData={quizData} checkAnswers={checkAnswers} />
    </div>
  );
}

export default SecondPage;
