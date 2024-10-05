// // src/components/Forecast.js
// import React from 'react';
// import { useSelector } from 'react-redux';

// const Forecast = () => {
//   const { forecast } = useSelector((state) => state.weather);

//   return (
//     <div>
//       <h3>5-Day Forecast</h3>
//       <div>
//         {forecast.map((day, index) => (
//           <div key={index}>
//             <p>Date: {new Date(day.dt * 1000).toLocaleDateString()}</p>
//             <p>Temperature: {Math.round(day.main.temp - 273.15)}°C</p>
//             <p>Weather: {day.weather[0].description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Forecast;
////////////////////////////
import React from 'react';
import { useSelector } from 'react-redux';

const Favorites = () => {
  const { favorites } = useSelector((state) => state.weather);

  return (
    <div>
      <h3>Favorites</h3>
      <ul>
        {favorites.length > 0 ? (
          favorites.map((cityData, index) => (
            <li key={index}>
              <strong>{cityData.city}</strong> - {cityData.temperature}°C - {cityData.weather}
            </li>
          ))
        ) : (
          <p>No favorites added yet.</p>
        )}
      </ul>
    </div>
  );
};

export default Favorites;
