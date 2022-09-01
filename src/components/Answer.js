import React from "react";
import { answerTrue, answerFalse } from "../helpers/checkAnswer";

const Answer = ({
  // Props
  video,
  points,
  setCounter,
  setPoints,
  answerCount,
  setAnswerCount,
  areDisabled,
  setAreDisabled,
}) => {
  // Function al hacer click en una respuesta
  const isCorrect = (e) => {
    const answer = e.target.textContent;

    if (answer === video[0].title && !areDisabled) {
      // Si es correcto; suma: un punto, una respuesta. Desactiva todos los botones y cambia el estilo
      answerTrue(
        setCounter,
        points,
        setPoints,
        answerCount,
        setAnswerCount,
        setAreDisabled,
        e
      );
    } else {
      // Si es incorrecto, suma: una respuesta. Desactiva todos los botones y cambia el estilo
      answerFalse(
        setCounter,
        points,
        setPoints,
        answerCount,
        setAnswerCount,
        setAreDisabled,
        e
      );
    }
  };

  return (
    <div className="options">
      {video[0].options.map((option) => {
        return (
          <button
            className="answer"
            key={option.a}
            disabled={areDisabled}
            onClick={(e) => isCorrect(e)}
          >
            {option.a}
          </button>
        );
      })}
    </div>
  );
};

export default Answer;
