import { useState } from "react";
import DisplayData from "./MainPage/DisplayData";
import Footer from "./MainPage/Footer";
import ApiCall from "./MainPage/ApiCall";

function SecondPage() {
  const quizData = ApiCall();

  console.log(quizData);

  function optionSelectionClick(x, y) {
    console.log(x, y);
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
