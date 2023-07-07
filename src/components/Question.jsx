import React, {useEffect, useState} from "react";
import {nanoid} from "nanoid";
import shuffleArray from "../utils";

export default function Question() {
  const [tests, setTests] = useState([]);
  const [ischecked, setIschecked] = useState([]);
  const [score, setScore] = useState(0);

  const url =
    "https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple&encode=base64";

  useEffect(() => {
          async function getTests() {
              const res = await fetch(url);
              const data = await res.json();
              const arr = [];
              data.results.forEach((element) => {
                  arr.push({
                      id: nanoid(),
                      question: element.question,
                      correct: element.correct_answer,
                      answers: shuffleArray([
                          ...element.incorrect_answers,
                          element.correct_answer,
                      ]),
                  });
              });
              setTests((prevState) => (prevState = arr));
          }

          getTests();
      },
      []);

  function clickHandler(e) {
    e.target.style.backgroundColor = "#D6DBF5";
    setIschecked([...ischecked, e.target.value]);
  }

  function check() {
    let count = 0;
    for (let i = 0; i < 5; i++) {}
  }

  const list = tests.map((test) => {
    return (
      <div className="container" key={test.id}>
        <h2 className="question">{atob(test.question)}</h2>
        <button
          className="answer-btn"
          onClick={clickHandler}
          value={test.answers[0]}
          type="button"
        >
          {atob(test.answers[0])}
        </button>
        <button
          className="answer-btn"
          onClick={clickHandler}
          value={test.answers[1]}
          type="button"
        >
          {atob(test.answers[1])}
        </button>
        <button
          className="answer-btn"
          onClick={clickHandler}
          value={test.answers[2]}
          type="button"
        >
          {atob(test.answers[2])}
        </button>
        <button
          className="answer-btn"
          onClick={clickHandler}
          value={test.answers[3]}
          type="button"
        >
          {atob(test.answers[3])}
        </button>
      </div>
    );
  });

  return (
    <div className="main-div">
      <div>
        {list}
        <button className="check-button" onClick={check}>
          Check answers
        </button>
      </div>
    </div>
  );
}
