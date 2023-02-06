import "./App.css";
import Question from "./components/Question";
import Startscreen from "./components/Startscreen";
import Blob2 from "./assets/Blob2";
import Blob1 from "./assets/Blob1";
import { useState } from "react";

function App() {
  const [started, setStarted] = useState(false);

  function toggleStart() {
    setStarted((prevState) => !prevState);
  }

  return (
    <div className="main-div">
      <Blob1 />
      {started ? <Question /> : <Startscreen toggleStart={toggleStart} />}
      <Blob2 />
    </div>
  );
}

export default App;
