import { useEffect, useState } from "react";
import DisplayData from "./MainPage/DisplayData";
import Footer from "./MainPage/Footer";
import ApiCall from "./MainPage/ApiCall";
import DummyData from "./MainPage/DummyData";

function SecondPage() {
  let quizData = ApiCall();

  function optionSelectionClick(id) {
    quizData = quizData.map((data) => {
      const { all_answers } = data;
      const answerSelected = all_answers.map((answers) => {
        if (answers.id === id) {
          return {
            ...answers,
            isHeld: !answers.isHeld,
          };
        } else {
          return { ...answers };
        }
      });
      return { ...data, all_answers: answerSelected };
    });
  }

  return (
    <div className="mainpage">
      <DisplayData
        quizData={quizData}
        optionSelectionClick={optionSelectionClick}
      />
      <Footer />
    </div>
  );
}

export default SecondPage;
