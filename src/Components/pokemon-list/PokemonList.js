import React, { useState, useEffect } from "react";
import axios from "axios";

import "./PokemonList.css";

// import Pagination from '../pagination/Pagination';
import PokemonCard from "../pokemon-card/PokemonCard";

const PokemonList = ({ match }) => {
  const [generation, setGeneration] = useState(1);

  const [pokemons, setPokemons] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  // eslint-disable-next-line
  const gens = [
    {
      gen: 1,
      limit: 151,
      offset: 0,
    },
    {
      gen: 2,
      limit: 100,
      offset: 151,
    },
    {
      gen: 3,
      limit: 135,
      offset: 251,
    },
    {
      gen: 4,
      limit: 108,
      offset: 386,
    },
    {
      gen: 5,
      limit: 155,
      offset: 494,
    },
    {
      gen: 6,
      limit: 72,
      offset: 649,
    },
    {
      gen: 7,
      limit: 88,
      offset: 721,
    },
    {
      gen: 8,
      limit: 89,
      offset: 809,
    },
  ];

  const nextGen = () => {
    window.scrollTo(0, 0);
    if (generation === 8) setGeneration(1);
    else setGeneration(generation + 1);
  };

  const prevGen = () => {
    window.scrollTo(0, 0);
    if (generation === 1) setGeneration(8);
    else setGeneration(generation - 1);
  };

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon?limit=${
          gens[generation - 1].limit
        }&offset=${gens[generation - 1].offset}`,
        {
          cancelToken: new axios.CancelToken(c => cancel = c),
        }
      )
      .then((res) => {
        setPokemons(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);
    return () => cancel();
  }, [generation, gens]);

  window.document.title = "Lista de pokémons | Pokédex";

  if (loading)
    return (
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );

  return (
    <div className="Pokemon-list">
      <div className="pagination">
        <button onClick={prevGen}>{"<"}</button>
        <h1>Geração {gens[generation - 1].gen}</h1>
        <button onClick={nextGen}>{">"}</button>
      </div>
      <input type="text" placeholder="Buscar Pokemon" onChange={(event) => {setSearchTerm(event.target.value.toString().toLowerCase())}}/>
      <div className="link-list">
        {
        // eslint-disable-next-line
        pokemons.filter((pokemon) => {
          if (searchTerm == null) return pokemon;
          else if (pokemon.name.includes(searchTerm) || pokemon.url.slice(-4, -1).includes(searchTerm)) return pokemon;
          
        })
        .map((pokemon) => (
          <PokemonCard name={pokemon.name} key={pokemon.name} />
        ))
        }
      </div>
      <div className="pagination">
        <button onClick={prevGen}>{"<"}</button>
        <button onClick={nextGen}>{">"}</button>
      </div>
    </div>
  );
};

export default PokemonList;
