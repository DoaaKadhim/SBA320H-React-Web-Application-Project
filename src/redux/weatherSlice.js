// src/redux/weatherSlice.js
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    currentWeather: null,
    forecast: [],
    favorites: [],
    loading: false,
  },
  reducers: {
    setCurrentWeather: (state, action) => {
      state.currentWeather = action.payload;
    },
    setForecast: (state, action) => {
      state.forecast = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    removeFavorite: (state, action) => {
      const updatedFavorites = state.favorites.filter(city => city !== action.payload);
      state.favorites = updatedFavorites;
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    },
    loadFavorites: (state) => {
      const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
      state.favorites = savedFavorites;
    },
  },
});

export const {
  setCurrentWeather,
  setForecast,
  setLoading,
  addFavorite,
  removeFavorite,
  loadFavorites,
} = weatherSlice.actions;

export const fetchWeatherData = (city) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`);
    const forecastResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=YOUR_API_KEY`);
    dispatch(setCurrentWeather(weatherResponse.data));
    dispatch(setForecast(forecastResponse.data.list));
  } catch (error) {
    console.error("Error fetching weather data", error);
  } finally {
    dispatch(setLoading(false));
  }
};

export default weatherSlice.reducer;
