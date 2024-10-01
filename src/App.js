
export default App;
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store, { loadFavorites } from './redux/store';
import WeatherDisplay from './components/WeatherDisplay';
import Forecast from './components/Forecast';
import Favorites from './components/Favorites';
import SearchBar from './components/SearchBar';

const App = () => {
  useEffect(() => {
    store.dispatch(loadFavorites());
  }, []);

  return (
    <Provider store={store}>
      <div>
        <h1>Weather Dashboard</h1>
        <SearchBar />
        <WeatherDisplay />
        <Forecast />
        <Favorites />
      </div>
    </Provider>
  );
};
