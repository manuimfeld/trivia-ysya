import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Trivia from "../components/Trivia";
import EndGame from "../components/EndGame";

export const PrincipalRouter = ({
  videos,
  points,
  setPoints,
  answerCount,
  setAnswerCount,
}) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inicio" element={<Home />} />
        <Route
          path="/trivia"
          element={
            <Trivia
              videos={videos}
              points={points}
              setPoints={setPoints}
              answerCount={answerCount}
              setAnswerCount={setAnswerCount}
            />
          }
        />
        <Route
          path="/puntos"
          element={<EndGame answerCount={answerCount} points={points} />}
        />
      </Routes>
    </BrowserRouter>
  );
};
