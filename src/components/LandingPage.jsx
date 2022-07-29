function LandingPage({ handleDisplay }) {
  return (
    <div className="landingpage">
      <h1 className="landingpage-header">Quizzical</h1>
      <p className="landingpage-text">Let's test your general knowledge!</p>
      <button className="landingpage-button" onClick={handleDisplay}>
        Start Quiz
      </button>
    </div>
  );
}

export default LandingPage;
