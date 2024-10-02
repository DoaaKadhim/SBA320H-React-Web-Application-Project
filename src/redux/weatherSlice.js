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
      state.loading = false;

    },
    setForecast: (state, action) => {
      state.forecast = action.payload;
    },
    setLoading: (state, action) => {

      state.loading = action.payload;
      console.log(action.payload)
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
    loadFavorites,
//   setCurrentWeather,
//   setForecast,
  setLoading
//   addFavorite,
//   removeFavorite,
//   loadFavorites,
} = weatherSlice.actions;

export const fetchWeatherData = (city) => async (dispatch) => {
  dispatch(setLoading(true));
  let API_KEY='6f57d42d88ac2ccd583d200a45de620f'
  try {
    console.log(API_KEY)
    const weatherResponse = await axios.get(`https://openweathermap.org/faq#error401=${city}&APPID=${API_KEY}`);
    const forecastResponse = await axios.get(`https://openweathermap.org/faq#error401=${city}&APPID=${API_KEY}`);
    dispatch(setCurrentWeather(weatherResponse.data));
    dispatch(setForecast(forecastResponse.data.list));
  } catch (error) {
    console.error("Error fetching weather data", error);
  } finally {
    dispatch(setLoading(false));
  }
};

export default weatherSlice.reducer;
