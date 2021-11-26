import React, { useState, useEffect } from "react";
import axios from "axios";

import BerryDesc from './BerryDesc';
import BerryImg from './BerryImg';

import {
  capitalizeFirstLetter,
  formatID,
} from "../../Utils/Functions";

import './BerryCard.css';

const BerryCard = ({ url }) => {
  const [berry, setBerry] = useState({});
  const [item, setItem] = useState("");

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setBerry(res.data);
        setItem(res.data.item);
      })
      .catch((error) => console.log(error))
  }, [url]);

  return (
    <div className="berry-card">
      <BerryImg url={item.url} />
      <p className="id">Nº {formatID(berry.id)}</p>
      <h1>{capitalizeFirstLetter(berry.name)}</h1>
      <BerryDesc url={item.url} />
    </div>
  );
};

export default BerryCard;
