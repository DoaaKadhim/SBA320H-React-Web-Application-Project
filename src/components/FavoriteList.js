// // src/components/FavoriteList.js
// import React from 'react';
// import { useSelector } from 'react-redux';
// import FavoriteButton from './FavoriteButton';

// const FavoriteList = ({ items }) => {
//   return (
//     <ul>
//       {items.map(item => (
//         <li key={item.id}>
//           {item.name}
//           <FavoriteButton item={item} /> {/* Add favorite button next to the item */}
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default FavoriteList;
//////////////////
// src/FavoriteList.js
// src/components/FavoriteList.js
// src/components/FavoriteList.js

import React from 'react';
import { useSelector } from 'react-redux';
import { addFavorite } from '../redux/favoritesSlice'; // Ensure the correct path

const FavoriteList = () => {
  const favorites = useSelector((state) => state.favorites.items);

  return (
    <div>
      <h3>Your Favorites</h3>
      {favorites.length === 0 ? (
        <p>No favorites added yet.</p>
      ) : (
        <ul>
          {favorites.map((favorite) => (
            <li key={favorite.id}>
              {favorite.name} - {favorite.weather} {/* Display weather description */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoriteList;
