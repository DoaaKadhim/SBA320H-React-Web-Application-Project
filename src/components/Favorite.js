
///temporary
// // src/components/Favorite.js
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addFavorite } from '../redux/favoritesSlice'; // Ensure the correct path
// import { fetchWeatherData } from '../redux/weatherSlice';

// const Favorite = () => {
//   const [city, setCity] = useState('');
//   const dispatch = useDispatch();

//   // Retrieve current weather data from the Redux store
//   const currentWeather = useSelector((state) => state.weather.currentWeather);

//   const handleAddFavorite = () => {
//     if (!currentWeather) return; // Prevent adding if there's no weather data

//     const newFavorite = {
//       id: currentWeather.id || Date.now(), // Use weather data ID or fallback to a unique ID
//       name: currentWeather.name, // Set the city name from current weather
//       weather: currentWeather.weather[0].description, // Add the weather description
//     };

//     dispatch(addFavorite(newFavorite)); // Add the new favorite
//     setCity(''); // Reset city input
//   };

//   const handleSearch = () => {
//     if (city) {
//       dispatch(fetchWeatherData(city)); // Fetch weather data for the entered city
//       setCity(''); // Reset city input after search
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//         placeholder="Enter city for weather"
//       />
//       <button onClick={handleSearch}>Search Weather</button>
//       <button onClick={handleAddFavorite} disabled={!currentWeather}>Add Favorite</button>
//     </div>
//   );
// };

// export default Favorite;
//new temporary
// src/components/Favorite.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite } from '../redux/favoritesSlice'; // Ensure the correct path
import { fetchWeatherData } from '../redux/weatherSlice';

const Favorite = () => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();

  // Retrieve current weather data from the Redux store
  const currentWeather = useSelector((state) => state.weather.currentWeather);

  const handleAddFavorite = () => {
    if (!currentWeather) {
      console.log('No weather data available to add as favorite.');
      return; // Prevent adding if there's no weather data
    }

    const newFavorite = {
      id: currentWeather.id || Date.now(), // Use weather data ID or fallback to a unique ID
      name: currentWeather.name, // Set the city name from current weather
      weather: currentWeather.weather[0].description, // Add the weather description
    };

    dispatch(addFavorite(newFavorite)); // Add the new favorite
    console.log(`Added ${newFavorite.name} to favorites with weather: ${newFavorite.weather}`);
    setCity(''); // Reset city input
  };

  const handleSearch = () => {
    if (city) {
      console.log(`Searching for weather data for city: ${city}`);
      dispatch(fetchWeatherData(city)); // Fetch weather data for the entered city
      setCity(''); // Reset city input after search
    } else {
      console.log('No city entered for search.');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city for weather"
      />
      <button onClick={handleSearch}>Search Weather</button>
      <button onClick={handleAddFavorite} disabled={!currentWeather}>Add Favorite</button>
    </div>
  );
};

export default Favorite;
