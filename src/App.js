import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import { PrincipalRouter } from "./router/PrincipalRouter.js";
import videosList from "./videos.json";

function App() {
  const [videos, setVideos] = useState([]); //Videos
  const [points, setPoints] = useState(0); //Canciones acertadas
  const [answerCount, setAnswerCount] = useState(0); //Numero de respuestas hechas

  // Cargar los videos que hay en el archivo JSON en el state
  useEffect(() => {
    setVideos(videosList);
  }, []);

  return (
    <PrincipalRouter
      videos={videos}
      points={points}
      setPoints={setPoints}
      answerCount={answerCount}
      setAnswerCount={setAnswerCount}
    />
  );
}

export default App;
