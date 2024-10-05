import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: [], // Array to store favorite cities
  },
  reducers: {
    addFavorite: (state, action) => {
      state.items.push(action.payload); // Add the favorite city object
    },
    loadFavorites: (state, action) => {
      state.items = action.payload; // Load favorites from an external source
    },
    // Optionally, you can add more reducers to remove favorites, etc.
  },
});

export const { addFavorite, loadFavorites } = favoritesSlice.actions; // Export both actions
export default favoritesSlice.reducer;
