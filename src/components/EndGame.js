import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CorrectAnswersContext } from '../context/CorrectAnswersContext'
import { IndexVideoContext } from '../context/IndexVideoContext'

const EndGame = () => {

  const {correctAnswers} = useContext(CorrectAnswersContext)
  const {indexVideo} = useContext(IndexVideoContext)

  return (
    <>
    {indexVideo.length < 11 ? (
      <>
      <p>Para ver tus puntos y subirlos, primero tenés que terminar las 11 canciones</p>
      <Link to="/trivia">Volver a Trivia</Link>
      </>
    ) : (
      <>
      <p>Le pegaste a {correctAnswers} de 11 canciones</p>
      <p>Subí tu score</p>
      </>
    )
    }
    </>
  )
}

export default EndGame