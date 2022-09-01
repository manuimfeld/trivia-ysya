import React from "react";
import { Link } from "react-router-dom";

const EndGame = ({ answerCount, points }) => {
  return (
    <>
      {answerCount < 11 ? (
        <>
          <p>
            Para ver tus subir tus puntos primero tenés que responder 11
            canciones
          </p>
          <Link to="/trivia">Volver a Trivia</Link>{" "}
        </>
      ) : (
        <>
          <p>Le pegaste a de {points} canciones</p>
          <p>Subí tu score</p>{" "}
        </>
      )}
    </>
  );
};

export default EndGame;
