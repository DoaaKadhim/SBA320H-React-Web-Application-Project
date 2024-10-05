import React from 'react';
import { useSelector } from 'react-redux';

const Favorites = () => {
  const { favorites } = useSelector((state) => state.weather);

  return (
    <div>
      <h3>Favorites</h3>
      <ul>
        {favorites.length > 0 ? (
          favorites.map((cityData, index) => (
            <li key={index}>
              <strong>{cityData.city}</strong> - {cityData.temperature}°C - {cityData.weather}
            </li>
          ))
        ) : (
          <p>No favorites added yet.</p>
        )}
      </ul>
    </div>
  );
};

export default Favorites;
