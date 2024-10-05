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
