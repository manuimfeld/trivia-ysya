import React, { useState } from "react";
import Answer from "./Answer";
import Counter from "./Counter";
import TotalAnswers from "./TotalAnswers";
import Video from "./Video";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import randomNumber from "../helpers/randomNumber";

const Trivia = ({ videos, points, setPoints, answerCount, setAnswerCount }) => {
  const [areDisabled, setAreDisabled] = useState(false); // Desactivar botones de respuestas
  const [counter, setCounter] = useState(10); // Tiempo limite para responder
  const [video, setVideo] = useState(null); // Video a renderizar

  useEffect(() => {
    let arrVideos = [...videos];

    // Si es el primer video, se renderiza uno random
    if (answerCount === 0) {
      setVideo([arrVideos[randomNumber(videos)]]);

      // Si no es el primer video, se renderiza otro cuando pasan 2 segundos
    } else {
      setTimeout(() => {
        setVideo([arrVideos[randomNumber(videos)]]);
        setAreDisabled(false); // Activo los botones nuevamente para poder responder
        setCounter(10); // Pongo el contador en 10 para que vuelva a descontar
      }, 2000);
    }
  }, [answerCount, videos]);

  return (
    <>
      {video === null ? (
        <p>Cargando</p>
      ) : answerCount < 11 ? (
        <div className="home">
          <div className="trivia-menu">
            {/*Render del video*/}
            <Video video={video} areDisabled={areDisabled} />
            {/*Las respuestas que faltan*/}
            <TotalAnswers answerCount={answerCount} />
            {/*Multiple choice de respuestas*/}
            <Answer
              video={video}
              points={points}
              setPoints={setPoints}
              answerCount={answerCount}
              setAnswerCount={setAnswerCount}
              areDisabled={areDisabled}
              setAreDisabled={setAreDisabled}
              counter={counter}
              setCounter={setCounter}
            />
            {/*Contador */}
            <Counter
              counter={counter}
              setCounter={setCounter}
              areDisabled={areDisabled}
            />
          </div>
        </div>
      ) : (
        <Navigate to="/puntos" />
      )}
    </>
  );
};

export default Trivia;
