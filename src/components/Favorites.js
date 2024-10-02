// src/components/Favorites.js
import React from 'react';
import { useSelector } from 'react-redux';

const Favorites = () => {
  const { favorites } = useSelector((state) => state.weather);

  return (
    <div>
      <h3>Favorites</h3>
      <ul>
        {favorites.map((city, index) => (
          <li key={index}>{city}</li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
