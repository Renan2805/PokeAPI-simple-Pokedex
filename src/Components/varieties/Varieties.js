import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { capitalizeFirstLetter } from "../../Utils/Functions";

const Varieties = ({ specieUrl }) => {
  const [specie, setSpecie] = useState({});
  const [varieties, setVarieties] = useState([]);

  useEffect(() => {
    axios
      .get(specieUrl)
      .then((res) => {
        setSpecie(res.data); 
        setVarieties(res.data.varieties);
      })
      .catch((error) => console.error(error));
  }, [specieUrl]);

  return (
	<>
		<div className="dropdown">
		<button
			className="btn btn-secondary dropdown-toggle"
			type="button"
			id="dropdownMenuButton1"
			data-bs-toggle="dropdown"
			aria-expanded="false"
		>
			{capitalizeFirstLetter(specie.name)}
		</button>
		<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
			{varieties.map((variety) => (
			<li>
				<Link
				to={`/pokemons/${variety.pokemon.name}`}
				className="dropdown-item"
				>
				{capitalizeFirstLetter(variety.pokemon.name)}
				</Link>
			</li>
			))}
		</ul>
		</div>
	</>
  );
};

export default Varieties;
