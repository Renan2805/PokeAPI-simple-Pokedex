import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Home = () => {
  window.document.title = "Home | Pokédex";
  return (
    <div className="app">
      <h1 className="link">
        <Link to="/pokemons/">
          Pokémons
        </Link>
      </h1>
      <h1 className="link">
        <Link to="/berries/">
          Berries
        </Link>
      </h1>
    </div>
    );
}
export default Home;