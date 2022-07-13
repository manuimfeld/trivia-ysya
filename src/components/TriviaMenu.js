import React from 'react'
import { Link } from 'react-router-dom'


const TriviaMenu = () => {

  return (
        <div className="trivia-menu">
            <h1>¿Cuantas canciones conoces?</h1>
            <Link to="/trivia"><button className='play'>Jugar</button></Link>
        </div>
  )
}

export default TriviaMenu