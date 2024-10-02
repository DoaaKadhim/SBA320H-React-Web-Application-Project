// src/api/weatherAPI.js
import axios from 'axios';
import { setWeatherData, setLoading } from '../redux/weatherSlice';

const API_KEY = '1e585cc116e74932a5024521240210';

export const fetchWeather = (city) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    dispatch(setWeatherData(response.data));
  } catch (error) {
    console.error('Error fetching weather data:', error);
  } finally {
    dispatch(setLoading(false));
  }
};
