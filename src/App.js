import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store, { loadFavorites } from './redux/store';
import WeatherDisplay from './components/weatherDisplay'; // Ensure correct case
import Favorites from './components/Favorites'; // Ensure correct case
import SearchBar from './components/SearchBar'; // Add this if you have a SearchBar component
import Forecast from './components/Forecast'; // Add this if you have a Forecast component

const App = () => {
  // useEffect(() => {
  //   store.dispatch(loadFavorites());
  // }, []);

  // return (
  //   <Provider store={store}>
  //     <div className="App">
  //       <h1>Weather Dashboard</h1>
  //       <SearchBar /> {/* Assuming you have a search bar component */}
  //       <WeatherDisplay />
  //       <Favorites />
  //       <Forecast /> {/* Assuming you have a forecast component */}
  //     </div>
  //   </Provider>
  // );
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Weather Dashboard</h1>
        <SearchBar />
        <WeatherDisplay />
        <Favorites />
        <Forecast />
      </div>
    </Provider>
  );
};

export default App;
