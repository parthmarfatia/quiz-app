import DisplayData from "./MainPage/DisplayData";
import Footer from "./MainPage/Footer";
import ApiCall from "./MainPage/ApiCall";

function SecondPage() {
  const quizData = ApiCall();

  return (
    <div className="mainpage">
      <DisplayData quizData={quizData} />
      <Footer />
    </div>
  );
}

export default SecondPage;
