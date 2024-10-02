// src/components/WeatherDisplay.js
import React from 'react';
import { useSelector } from 'react-redux';

const WeatherDisplay = () => {
  const { currentWeather, loading } = useSelector((state) => state.weather);

  if (loading) return <p>Loading...</p>;
  if (!currentWeather) return <p>No data available. Please search for a city.</p>;

  return (
    <div>
      <h2>{currentWeather.name}</h2>
      <p>Temperature: {Math.round(currentWeather.main.temp - 273.15)}°C</p>
      <p>Weather: {currentWeather.weather[0].description}</p>
      <p>Humidity: {currentWeather.main.humidity}%</p>
      <p>Wind Speed: {currentWeather.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherDisplay;
