import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Pokemon.css";

import Varieties from "../varieties/Varieties";

import {
  capitalizeFirstLetter,
  addCommaBeforeLastNumber,
  setTypeBackgroundColor,
} from "../../Utils/Functions";

const Pokemon = ({ match }) => {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonStats, setPokemonStats] = useState([]);
  const [sprites, setSprites] = useState([]);

  const [loading, setLoading] = useState(true);

  // This function should be used in a style prop to set the width of the element based on the statValue parameter
  const setStatHeight = (statValue) => {
    return {
      height: `${statValue}px`,
    };
  };
  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${match.params.name}`, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setPokemon(res.data);
        setSprites(res.data.sprites);
        setPokemonStats(res.data.stats);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
    return () => cancel();
  }, [match.params.name]);

  window.document.title = capitalizeFirstLetter(pokemon.name) + " | Pokédex";

  if (loading) return "Loading...";

  return (
    <div className="pokemon-page">
      <div className="info">
        <div className="info1">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={sprites.front_default} alt="..." />
              </div>
              <div className="carousel-item">
                <img src={sprites.front_shiny} alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="info2">
          <div className="name">
            <h1>{capitalizeFirstLetter(pokemon.name)}</h1>
            <div className="types">
              {pokemon.types.map((t) => (
                <h3
                  style={setTypeBackgroundColor(t.type.name)}
                  key={t.type.slot}
                >
                  {capitalizeFirstLetter(t.type.name)}
                </h3>
              ))}
            </div>

            <div className="weight-height">
              <div className="weight">
                <h2>{addCommaBeforeLastNumber(pokemon.weight)} Kg</h2>
              </div>
              <div className="height">
                <h2>{addCommaBeforeLastNumber(pokemon.height)} M</h2>
              </div>
            </div>
            <Varieties specieUrl={pokemon.species.url} className="varieties" />
          </div>
        </div>
      </div>
      <div className="stats">
        <div className="hp stat">
          {pokemonStats[0].base_stat}
          <div
            className="level"
            style={setStatHeight(pokemonStats[0].base_stat)}
          ></div>
          HP
        </div>
        <div className="atk stat">
          {pokemonStats[1].base_stat}
          <div
            className="level"
            style={setStatHeight(pokemonStats[1].base_stat)}
          ></div>
          Atk
        </div>
        <div className="def stat">
          {pokemonStats[2].base_stat}
          <div
            className="level"
            style={setStatHeight(pokemonStats[2].base_stat)}
          ></div>
          Def
        </div>
        <div className="sp-atk stat">
          {pokemonStats[3].base_stat}
          <div
            className="level"
            style={setStatHeight(pokemonStats[3].base_stat)}
          ></div>
          SpAtk
        </div>
        <div className="sp-def stat">
          {pokemonStats[4].base_stat}
          <div
            className="level"
            style={setStatHeight(pokemonStats[4].base_stat)}
          ></div>
          SpDef
        </div>
        <div className="spd stat">
          {pokemonStats[5].base_stat}
          <div
            className="level"
            style={setStatHeight(pokemonStats[5].base_stat)}
          ></div>
          Spd
        </div>
      </div>
      <div className="stats-mobile">
        <div className="stat-mobile">
          <p>HP</p>
          {pokemonStats[0].base_stat}
        </div>
        <div className="stat-mobile">
        <p>Atk</p>
          {pokemonStats[1].base_stat}
        </div>
        <div className="stat-mobile">
        <p>Def</p>
          {pokemonStats[2].base_stat}
        </div>
        <div className="stat-mobile">
        <p>SpAtk</p>
          {pokemonStats[3].base_stat}
        </div>
        <div className="stat-mobile">
        <p>SpDef</p>
          {pokemonStats[4].base_stat}
        </div>
        <div className="stat-mobile">
        <p>Spd</p>
          {pokemonStats[5].base_stat}
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
