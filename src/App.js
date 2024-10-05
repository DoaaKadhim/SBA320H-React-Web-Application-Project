// import React, { useEffect } from 'react';
// import { Provider } from 'react-redux';
// import store, { loadFavorites } from './redux/store';
// import WeatherDisplay from './components/weatherDisplay'; // Ensure correct case
// import Favorites from './components/Favorite'; // Ensure correct case
// import SearchBar from './components/SearchBar'; // Add this if you have a SearchBar component
// import Forecast from './components/Forecast'; // Add this if you have a Forecast component

// const App = () => {
//   return (
//     <Provider store={store}>
//       <div className="App">
//         <h1>Weather Dashboard</h1>
//         <SearchBar />
//         <WeatherDisplay />
//         <Favorites />
//         <Forecast />
//       </div>
//     </Provider>
//   );
// };

// export default App;
//////////new 
// src/App.js

// import React from 'react';
// import { Provider } from 'react-redux';
// import store from './redux/store'; // Ensure the correct path to your store
// import Favorite from './components/Favorite';
// import FavoriteList from './components/FavoriteList';

// const App = () => {
//   return (
//     <Provider store={store}>
//       <div>
//         <h1>Weather Application</h1>
//         <Favorite />
//         <FavoriteList />
//       </div>
//     </Provider>
//   );
// };

// export default App;
///==========
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadFavorites } from './redux/weatherSlice';
import WeatherDisplay from './components/weatherDisplay';
import Favorite from './components/Favorite';
import FavoriteList from './components/FavoriteList';


const App = () => {
  const dispatch = useDispatch();

  // Load favorites from localStorage when the app mounts
  useEffect(() => {
    dispatch(loadFavorites());
  }, [dispatch]);

  return (
    
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Weather App</h1>
      <WeatherDisplay />
      <Favorite />
      <FavoriteList />
    </div>
  );
};

export default App;
