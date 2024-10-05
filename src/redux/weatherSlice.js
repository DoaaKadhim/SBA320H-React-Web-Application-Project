
// // export default weatherSlice.reducer;
// import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

// const weatherSlice = createSlice({
//   name: 'weather',
//   initialState: {
//     currentWeather: null,
//     forecast: [],
//     favorites: [],
//     loading: false,
//   },
//   reducers: {
//     setCurrentWeather: (state, action) => {
//       state.currentWeather = action.payload;
//       state.loading = false;
//     },
//     setForecast: (state, action) => {
//       state.forecast = action.payload;
//     },
//     setLoading: (state, action) => {
//       state.loading = action.payload;
//     },
//     addFavorite: (state, action) => {
//       state.favorites.push(action.payload);
//       localStorage.setItem('favorites', JSON.stringify(state.favorites));
//     },
//     removeFavorite: (state, action) => {
//       const updatedFavorites = state.favorites.filter(city => city !== action.payload);
//       state.favorites = updatedFavorites;
//       localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
//     },
//     loadFavorites: (state) => {
//       const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
//       state.favorites = savedFavorites;
//     },
//   },
// });

// export const {
//   setCurrentWeather,
//   setForecast,
//   setLoading,
//   addFavorite,
//   removeFavorite,
//   loadFavorites,
// } = weatherSlice.actions;

// // Thunk to fetch weather data
// export const fetchWeatherData = (city) => async (dispatch) => {
//   dispatch(setLoading(true));
//   const API_KEY = '6f57d42d88ac2ccd583d200a35de620f'; // Replace with your valid API key
//   const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather`;
//   const FORECAST_API_URL = `https://api.openweathermap.org/data/2.5/forecast`;

//   try {
//     // Fetch current weather data
//     const weatherResponse = await axios.get(`${WEATHER_API_URL}?q=${city}&appid=${API_KEY}`);
//     // Fetch forecast data
//     const forecastResponse = await axios.get(`${FORECAST_API_URL}?q=${city}&appid=${API_KEY}`);

//     // Dispatch actions to update the state with the data
//     dispatch(setCurrentWeather(weatherResponse.data));
//     dispatch(setForecast(forecastResponse.data.list));
//   } catch (error) {
//     if (error.response) {
//       console.error("Error response from server:", error.response.data);
//     } else if (error.request) {
//       console.error("No response received:", error.request);
//     } else {
//       console.error("Error setting up request:", error.message);
//     }
//   } finally {
//     dispatch(setLoading(false));
//   }
// };

// // Export the reducer as the default export
// export default weatherSlice.reducer;
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
    },
    addFavorite: (state, action) => {
      // Avoid adding duplicates based on city name
      const exists = state.favorites.some(fav => fav.city === action.payload.city);
      if (!exists) {
        state.favorites.push(action.payload);
        localStorage.setItem('favorites', JSON.stringify(state.favorites));
      }
    },
    removeFavorite: (state, action) => {
      const updatedFavorites = state.favorites.filter(city => city.city !== action.payload.city);
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

// Thunk to fetch weather data
export const fetchWeatherData = (city) => async (dispatch) => {
  dispatch(setLoading(true));
  const API_KEY = '6f57d42d88ac2ccd583d200a35de620f'; // Replace with your valid API key
  const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather`;
  const FORECAST_API_URL = `https://api.openweathermap.org/data/2.5/forecast`;

  try {
    // Fetch current weather data
    const weatherResponse = await axios.get(`${WEATHER_API_URL}?q=${city}&appid=${API_KEY}`);
    // Fetch forecast data
    const forecastResponse = await axios.get(`${FORECAST_API_URL}?q=${city}&appid=${API_KEY}`);

    // Dispatch actions to update the state with the data
    dispatch(setCurrentWeather(weatherResponse.data));
    dispatch(setForecast(forecastResponse.data.list));
  } catch (error) {
    console.error(error);
  } finally {
    dispatch(setLoading(false));
  }
};

// Export the reducer as the default export
export default weatherSlice.reducer;
