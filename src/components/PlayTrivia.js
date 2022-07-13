import React, { useState, useEffect, useContext } from 'react'
import videos from '../videos.json'
import '../App.css'
import { Navigate } from 'react-router-dom'
import { CorrectAnswersContext } from '../context/CorrectAnswersContext'
import { IndexVideoContext } from '../context/IndexVideoContext'

const PlayTrivia = () => {

  const [video, setVideo] = useState([(videos[Math.floor(Math.random() * videos.length)])])
  const [points, setPoints] = useState(0)
  const {indexVideo, setIndexVideo} = useContext(IndexVideoContext)
  const [counter, setCounter] = useState(10)
  const [areDisabled, setAreDisabled] = useState(false)
  const [answer, setAnswer] = useState(false)
  const {correctAnswers, setCorrectAnswers} = useContext(CorrectAnswersContext)

/* cuando arranca el componente, llama a la funcion getRandomVideo
/* cada vez que se suma un punto, vuelve a llamar a la función y así genera un video aleatorio nuevo
*/

/* VARIABLES GLOBALES */
let videoHide = document.getElementsByClassName('video-hide')[0]

/* CONTADOR */
useEffect(() => {
  const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
  if (counter === 0 && !answer) {
    setAreDisabled(true)
    videoHide.style.background = 'none'
  } else if (counter === 0 && answer) {
    setAreDisabled(true)
  }
  return () => clearInterval(timer);
 // eslint-disable-next-line
}, [counter])

/* GENERAR NUEVO VIDEO */
useEffect(() => {
  if (indexVideo.length === 0) {
    setIndexVideo(video)
  } else {
    getRandomVideo()
  }
  // eslint-disable-next-line
}, [points]);

/* CADA VEZ QUE EL STATE VIDEO ACTUALICE, ACTUALIZA EL STATE INDEXVIDEO */
useEffect(() => {
  setIndexVideo(indexVideo.concat(video))
  // eslint-disable-next-line
}, [video])

/* funcion para elegir un video aleatorio y no repetirlo */
const getRandomVideo = () => {
  let newVideoList = videos.filter(videoList => !indexVideo.includes(videoList))
  setVideo([(newVideoList[Math.floor(Math.random() * newVideoList.length)])])
}

/* funcion para mostrar el video, ocultarlo, sumar puntos y reiniciar useEffect*/
const handleOptionClick = (e) => {
  videoHide.style.background = 'none'
  console.log(e)
    
  if (e === video[0].title) {
    setAnswer(true)
    setCounter(0)
    setCorrectAnswers(correctAnswers + 1)
    setTimeout(() => {
      videoHide.style.background = 'black'
      setAreDisabled(false);
      setPoints(points + 1)
      setCounter(10)
      setAnswer(false)
    }, 5000)
  } else {
    setAnswer(false)
    setCounter(0)
  }
}

  return (
    <>
    <div className="home">
    {
    (indexVideo.length < 12) ?
    <div className="trivia-menu">
      <div className="video">
      <iframe width="500" height="250" src={"https://www.youtube.com/embed/" + video[0].id +"?controls=0&autoplay=1&mute=0&showinfo=0"} title="YSY A - PASTEL CON NUTELLA (Video Oficial)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <div className="video-hide"></div>
      </div>
      <p className='points'>{points}/11</p>
      <div className="options">
            {video[0].options.map((option) => {
              return (
                <button className='button' key={option.a}  disabled={areDisabled} onClick={(e) => {handleOptionClick(option.a)}}>{option.a}</button>
              )
            })}
      </div>
      {!areDisabled ? (
        <p className='counter'>{counter}</p> )
         : (areDisabled === true && answer !== true) ? (
        <>
        <p className='answer-incorrect'>Le pifeaste pa :(</p>
        <button className="button-continue" onClick={() => {
          videoHide.style.background = 'black'
          setCounter(10);
          setAreDisabled(false);
          setPoints(points + 1);}}>
          Continuar
          </button> </>)
      : (areDisabled === true && answer === true) ? (
        <p className='answer-correct'>¡Bien! +1</p> )
      : null}
    </div> :
    <Navigate to="/puntos" />
  }
  </div>
    </>
  )
}

export default PlayTrivia