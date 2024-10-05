
// src/components/Weather.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = ({ city }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6f57d42d88ac2ccd583d200a35de620f&units=metric`);
        setWeather(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (city) {
      fetchWeather();
    }
  }, [city]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h4>Weather in {weather.name}</h4>
      <p>Temperature: {weather.main.temp} °C</p>
      <p>Condition: {weather.weather[0].description}</p>
    </div>
  );
};

export default Weather;
