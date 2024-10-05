// // src/redux/store.js

// import { configureStore } from '@reduxjs/toolkit';
// // import weatherReducer from './weatherSlice';
// // import favoritesReducer from './favoritesSlice'; // Import the favorites reducer
// import weatherReducer from './weatherSlice';
// const store = configureStore({
//   reducer: {
//     weather: weatherReducer,
//     // favorites: favoritesReducer, // Add favorites reducer here
//   },
// });

// // Load favorites function (renamed)
// // const loadFavoritesFromStorage = () => {
// //     const favorites = JSON.parse(localStorage.getItem('favorites')) || []; // Load favorites from localStorage
// //     store.dispatch(loadFavoritesAction(favorites)); 
// //  };
 

// // export { loadFavorites };
// export default store;
///////////////
// src/redux/store.js

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
