
// store.js
import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './weatherSlice';
import favoritesReducer, { loadFavorites } from './favoritesSlice'; // Correctly import loadFavorites

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    favorites: favoritesReducer,
  },
});

const loadFavoritesFromStorage = () => {
  const savedFavorites = localStorage.getItem('favorites');
  if (savedFavorites) {
    const favorites = JSON.parse(savedFavorites);
    store.dispatch(loadFavorites(favorites)); // Use loadFavorites to load data from storage
  }
};

loadFavoritesFromStorage(); // Call the function to load favorites from localStorage

export default store;
