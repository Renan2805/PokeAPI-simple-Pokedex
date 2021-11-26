import React, { useState, useEffect } from "react";
import axios from "axios";
import BerryCard from "../berry-card/BerryCard";

import './BerryList.css';

const BerryList = () => {
  const [berries, setBerries] = useState([]);

  window.document.title = "Lista de berries | Pokédex";

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/berry?limit=64")
      .then((res) => {
        setBerries(res.data.results);
      })
      .catch((error) => console.log(error));
  });

  return (
    <div className="berry-list">
      {berries.map((berry) => (
				<BerryCard url={berry.url} />
      ))}
    </div>
  );
};

export default BerryList;
