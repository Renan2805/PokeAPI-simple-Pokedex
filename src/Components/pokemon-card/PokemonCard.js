import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./PokemonCard.css";

import {
  capitalizeFirstLetter,
  setTypeBackgroundColor,
  formatID,
} from "../../Utils/Functions";

const PokemonCard = ({ name }) => {
  const [pokemon, setPokemon] = useState({});
  const [types, setTypes] = useState([]);
  const [sprite, setSprite] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => {
        setPokemon(res.data);
        setTypes(res.data.types);
        setSprite(res.data.sprites);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [name]);

  if (loading)
    return (
      <div className="pokemon-card">
        <div class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );

  return (
    <div className="pokemon-card">
      <img src={sprite.front_default} alt="Sprite" className="card-sprite" />
      <p>nº {formatID(pokemon.id)}</p>
      <Link to={`/pokemons/${pokemon.name}`}>
        <h1>{capitalizeFirstLetter(pokemon.name)}</h1>
      </Link>
      <div className="list-type">
        {types.map((t) => (
          <h5 style={setTypeBackgroundColor(t.type.name)} key={t.slot}>
            {capitalizeFirstLetter(t.type.name)}
          </h5>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
