import React, { useState, useEffect } from "react";
import axios from "axios";

const BerryDesc = ({ url }) => {
  const [description, setDescription] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get(url, {
        cancelToken: new axios.CancelToken(c => cancel = c),
      })
      .then((res) => {
        setDescription(res.data.effect_entries);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));

    return () => {
      cancel();
    }
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

  return (
    <>
      {description.map((effect) => (
        <p key={description.indexOf(effect)}>{effect.short_effect}</p>
      ))}
    </>
  );
};

export default BerryDesc;