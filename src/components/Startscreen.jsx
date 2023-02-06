import React from "react";

export default function Startscreen(props) {
  return (
    <div>
      <h1 className="headline">Quizzical</h1>
      <button className="start-button" onClick={props.toggleStart}>
        Start Quiz
      </button>
    </div>
  );
}
