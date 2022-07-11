import React, { useState } from 'react'
import PlayTrivia from './PlayTrivia'

const TriviaMenu = () => {

  const [trivia, setTrivia] = useState(false)

  return (
    (trivia !== true) ?
        <div className="trivia-menu">
            <h1>¿Cuanto sabes de Ysy A?</h1>
            <button onClick={() => setTrivia(true)}>Empezar</button>
        </div> :
        <PlayTrivia />
  )
}

export default TriviaMenu