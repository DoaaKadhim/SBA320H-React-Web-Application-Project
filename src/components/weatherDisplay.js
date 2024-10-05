import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const WeatherDisplay = () => {
  const { currentWeather, loading, error } = useSelector((state) => state.weather);
  const [isCelsius, setIsCelsius] = useState(true); // State to toggle between Celsius and Fahrenheit

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>; // Display error if it exists
  if (!currentWeather) return <p>No data available. Please search for a city.</p>;

  // Temperature conversion
  const temperature = isCelsius
    ? Math.round(currentWeather.main.temp - 273.15) // Celsius
    : Math.round((currentWeather.main.temp - 273.15) * 9/5 + 32); // Fahrenheit

  return (
    <div>
      <h2>{currentWeather.name}</h2>
      <p>Temperature: {temperature}°{isCelsius ? 'C' : 'F'}</p>
      <p>Weather: {currentWeather.weather[0].description}</p>
      <p>Humidity: {currentWeather.main.humidity}%</p>
      <p>Wind Speed: {currentWeather.wind.speed} m/s</p>
      <button onClick={() => setIsCelsius(!isCelsius)}>
        Switch to °{isCelsius ? 'F' : 'C'}
      </button>
    </div>
  );
};

export default WeatherDisplay;
