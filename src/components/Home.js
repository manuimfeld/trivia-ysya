import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="trivia-menu">
        <h1>¿Cuantas canciones conoces?</h1>
        <Link to="/trivia">
          <button className="play">Jugar</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
