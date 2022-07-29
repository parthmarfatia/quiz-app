import { useState } from "react";
import BackgroundImages from "./assets/BackgroundImages";
import LandingPage from "./components/LandingPage";
import MainPage from "./components/MainPage";

function App() {
  const [displayPage, setDisplayPage] = useState(false);
  function handleDisplay() {
    setDisplayPage(true);
  }
  return (
    <main>
      {!displayPage && <LandingPage handleDisplay={handleDisplay} />}
      {displayPage && <MainPage />}
      <BackgroundImages />
    </main>
  );
}

export default App;
