function Footer(props) {
  const { quizData, checkAnswers } = props;
  return (
    <div className="footer">
      {false && (
        <h4 className="display-score">You scored 3/5 correct answers</h4>
      )}
      <button className="check-button">Check answers</button>
    </div>
  );
}

export default Footer;
