import "./App.css";
import Question from "./components/Question";
import Startscreen from "./components/Startscreen";
import { useState } from "react";

function App() {
  const [started, setStarted] = useState(false);

  function toggleStart() {
    setStarted((prevState) => !prevState);
  }

  return (
    <div className="main-div">
      {started ? <Question /> : <Startscreen toggleStart={toggleStart} />}
    </div>
  );
}

export default App;
