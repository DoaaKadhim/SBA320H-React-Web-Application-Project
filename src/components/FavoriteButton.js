// src/components/FavoriteButton.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/favoritesSlice';

const FavoriteButton = ({ item }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.items);

  // Check if the item is already in favorites
  const isFavorited = favorites.some(favorite => favorite.id === item.id);

  // Toggle favorite status on button click
  const handleFavoriteClick = () => {
    if (isFavorited) {
      dispatch(removeFavorite(item)); // Dispatch removeFavorite action
    } else {
      dispatch(addFavorite(item)); // Dispatch addFavorite action
    }
  };

  return (
    <button onClick={handleFavoriteClick}>
      {isFavorited ? 'Unfavorite' : 'Favorite'} {/* Show correct label */}
    </button>
  );
};

export default FavoriteButton;
