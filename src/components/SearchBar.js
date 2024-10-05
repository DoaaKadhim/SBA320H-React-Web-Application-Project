// // src/components/SearchBar.js
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchWeatherData } from '../redux/weatherSlice';

// const SearchBar = () => {
//   const [city, setCity] = useState('');
//   const dispatch = useDispatch();

//   const handleSearch = () => {
//     if (city) {
//       dispatch(fetchWeatherData(city));
//       setCity('');
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//         placeholder="Enter city name"
//       />
//       <button onClick={handleSearch}>Search</button>
//     </div>
//   );
// };

// export default SearchBar;
//================
// // src/components/SearchBar.js
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchWeatherData, addFavorite } from '../redux/weatherSlice';

// const SearchBar = () => {
//   const [city, setCity] = useState('');
//   const dispatch = useDispatch();
  
//   // Get the current weather data from the Redux store
//   const currentWeather = useSelector((state) => state.weather.currentWeather);

//   const handleSearch = () => {
//     if (city) {
//       dispatch(fetchWeatherData(city));
//       setCity('');
//     }
//   };

//   const handleFavorite = () => {
//     if (currentWeather) {
//       // Create a favorite object based on current weather
//       const favoriteCity = {
//         city: currentWeather.name,
//         temperature: Math.round(currentWeather.main.temp - 273.15), // Convert from Kelvin to Celsius
//         description: currentWeather.weather[0].description,
//       };

//       // Dispatch action to add favorite
//       dispatch(addFavorite(favoriteCity));
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//         placeholder="Enter city name"
//       />
//       <button onClick={handleSearch}>Search</button>
//       <button onClick={handleFavorite} disabled={!currentWeather}>
//         Add to Favorites
//       </button>
//     </div>
//   );
// };

// export default SearchBar;
//last the one above work 
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherData, addFavorite } from '../redux/weatherSlice';

const SearchBar = () => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();
  
  // Get the current weather data from the Redux store
  const currentWeather = useSelector((state) => state.weather.currentWeather);

  const handleSearch = () => {
    if (city) {
      dispatch(fetchWeatherData(city));
      setCity('');
    }
  };

  const handleFavorite = () => {
    if (currentWeather) {
      // Create a favorite object based on current weather
      const favoriteCity = {
        id: currentWeather.id, // Unique ID for the city
        name: currentWeather.name,
        weather: currentWeather.weather[0].description, // Weather description
      };

      // Dispatch action to add favorite
      dispatch(addFavorite(favoriteCity));
    }
  };

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleFavorite} disabled={!currentWeather}>
        Add to Favorites
      </button>
    </div>
  );
};

export default SearchBar;
