import React, { useState, useEffect } from "react";
import axios from "axios";

const BerryImg = ({ url }) => {
  const [sprite, setSprite] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setSprite(res.data.sprites.default);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [url])


  if (loading) {
    return (
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return <img src={sprite} alt="" />;
};

export default BerryImg;
