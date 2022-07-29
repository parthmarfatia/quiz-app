function Footer(props) {
  const { checkAnswers, checkAnswerFlag, score, playAgain } = props;
  return (
    <div className="footer">
      {checkAnswerFlag && (
        <>
          <h4 className="display-score">
            You scored {score}/5 correct answers
          </h4>
          <button className="check-button" onClick={playAgain}>
            Play Again
          </button>
        </>
      )}
      {!checkAnswerFlag && (
        <button className="check-button" onClick={checkAnswers}>
          Check answers
        </button>
      )}
    </div>
  );
}

export default Footer;
