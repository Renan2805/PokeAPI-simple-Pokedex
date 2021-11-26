import React from "react";
import { Link } from "react-router-dom";
import './Nav.css';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="/image/Rayquaza.png" className="logo-img" alt="Rayquaza" />{" "}
          Pokedex
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/pokemons/">
              Lista de Pokemons
            </Link>
            <Link className="nav-link" to="/berries/">
              Lista de Berries
            </Link>
            <Link className="nav-link" to="/about/">
              Sobre
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
