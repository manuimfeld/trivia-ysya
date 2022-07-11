import React, { useState, useEffect } from 'react'
import videos from '../videos.json'
import '../App.css'

const PlayTrivia = () => {

  const [video, setVideo] = useState([(videos[Math.floor(Math.random() * videos.length)])])
  const [points, setPoints] = useState(0)
  const [indexVideo, setIndexVideo] = useState([])

/* cuando arranca el componente, llama a la funcion getRandomVideo
/* cada vez que se suma un punto, vuelve a llamar a la función y así genera un video aleatorio nuevo
*/

  useEffect(() => {
    if (indexVideo.length === 0) {
      setIndexVideo(video)
    } else {
      getRandomVideo()
    }
  // eslint-disable-next-line
  }, [points]);

/* funcion para elegir un video aleatorio y no repetirlo */
  const getRandomVideo = () => {
    let newVideoList = videos.filter(videoList => !indexVideo.includes(videoList))
    setVideo([(newVideoList[Math.floor(Math.random() * newVideoList.length)])])
    setIndexVideo(indexVideo.concat(video))
  }

/* funcion para mostrar el video, ocultarlo, sumar puntos y reiniciar useEffect*/
  const handleOptionClick = (e) => {
    /* let videoHide = document.getElementsByClassName('video-hide')[0] */
    /* videoHide.style.background = 'none' */
    if (e === video[0].title) {
      setTimeout(() => {
        /* videoHide.style.background = 'black' */
        setPoints(points + 1)
      }, 100)
    } else {
      setPoints(points - 1)
    }
  }

  return (
    <>
    {
    (video.length <= 0) ? 
    <p>AÑA</p> : 
    <div className="trivia-menu">
      <iframe width="500" height="250" src={"https://www.youtube.com/embed/" + video[0].id +"?controls=0&autoplay=1&mute=0&showinfo=0"} title="YSY A - PASTEL CON NUTELLA (Video Oficial)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      {/*  <div className="video-hide"></div> */}
      <div className="options">
            {video[0].options.map((option) => {
              return (
                <button key={option.a} onClick={(e) => handleOptionClick(option.a)}>{option.a}</button>
              )
            })}
      </div>
      <p className='points'>Le pegaste a {points} canciones</p>
    </div>
    }
    </>
  )
}

export default PlayTrivia