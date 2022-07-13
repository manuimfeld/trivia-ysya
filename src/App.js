import { useState } from 'react'
import './App.css';
import { CorrectAnswersContext } from './context/CorrectAnswersContext';
import { IndexVideoContext } from './context/IndexVideoContext'
import { PrincipalRouter } from './router/PrincipalRouter.js'

function App() {
  const [indexVideo, setIndexVideo] = useState([])
  const [correctAnswers, setCorrectAnswers] = useState(0);

  return (
    <CorrectAnswersContext.Provider value={{correctAnswers, setCorrectAnswers}}>
    <IndexVideoContext.Provider value={{indexVideo, setIndexVideo}}>
    <PrincipalRouter />
    </IndexVideoContext.Provider>
    </CorrectAnswersContext.Provider>
  );
}

export default App;
