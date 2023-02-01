import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Blob1 from "../assets/Blob1";
import Blob2 from "../assets/Blob2";
import shuffleArray from "../utils";

export default function Question() {
  const [tests, setTests] = useState([]);
  const [started, setStarted] = useState(false);
  const [count, setCount] = useState(0);

  const url =
    "https://opentdb.com/api.php?amount=5&type=multiple&encode=base64";

  useEffect(() => {
    async function getTests() {
      const res = await fetch(url);
      const data = await res.json();
      const Arr = data.results.map((item) => {
        return {
          ...item,
          "": item.incorrect_answers.push(item.correct_answer),
        };
      });
      setTests((prevArr) => (prevArr = Arr));
    }
    getTests();
  }, []);

  function toggleStart() {
    setStarted((prevState) => !prevState);
  }

  function clickHandler(e) {
    e.target.style.backgroundColor = "#D6DBF5";
  }

  const randomNumber = [0, 1, 2, 3];
  const index = shuffleArray(randomNumber);

  const list = tests.map((test) => {
    return (
      <div className="container" key={test.correct_answer}>
        <h2 className="question">{atob(test.question)}</h2>
        <button className="answer-btn" checked={false} onClick={clickHandler}>
          {atob(test.incorrect_answers[`${index[0]}`])}
        </button>
        <button className="answer-btn" checked={false} onClick={clickHandler}>
          {atob(test.incorrect_answers[`${index[1]}`])}
        </button>
        <button className="answer-btn" checked={false} onClick={clickHandler}>
          {atob(test.incorrect_answers[`${index[2]}`])}
        </button>
        <button className="answer-btn" checked={false} onClick={clickHandler}>
          {atob(test.incorrect_answers[`${index[3]}`])}
        </button>
      </div>
    );
  });

  const startScreen = (
    <button className="start-button" onClick={toggleStart}>
      Start Quiz
    </button>
  );

  return (
    <div className="main-div">
      <Blob1 />
      {started ? (
        <div>
          {list}
          <button className="check-button">Check answers</button>
        </div>
      ) : (
        <div>{startScreen}</div>
      )}
      <Blob2 />
    </div>
  );
}
