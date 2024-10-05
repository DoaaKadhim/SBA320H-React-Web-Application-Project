import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './weatherSlice';
import favoritesReducer from './favoritesSlice'; // Ensure this is imported correctly

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    favorites: favoritesReducer,
  },
});

const loadFavorites = () => {
  // Logic to load favorites, potentially from localStorage or another source
};

export { loadFavorites };
export default store;
