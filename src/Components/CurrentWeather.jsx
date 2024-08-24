



// // eslint-disable-next-line react/prop-types
// const CurrentWeather = ({ weather }) => {
//   if (!weather) return null;

//   // eslint-disable-next-line react/prop-types
//   const { temp, temp_min, temp_max, humidity } = weather.main;
//   // eslint-disable-next-line react/prop-types
//   const { speed, deg } = weather.wind;
//   // eslint-disable-next-line react/prop-types
//   const { description, icon } = weather.weather[0];

//   return (
//     <div className="weather-details">
//       <h2>Current Weather</h2>
//       <div className="main-details">
       
//         <p>Temperature: {temp}°</p>
//         <p>
//           Min: {temp_min}° Max: {temp_max}°
//         </p>
//         <p>Humidity: {humidity}%</p>
//         <p>
//           Wind: {speed} m/s, {deg}°
//         </p>
//         <p>{description}</p>
//         <img
//           src={`http://openweathermap.org/img/w/${icon}.png`}
//           alt={description}
//           style={{width:"50px"}}
//         />
       
//       </div>
//     </div>
//   );
// };

// export default CurrentWeather;
// src/components/CurrentWeather.js



// eslint-disable-next-line react/prop-types
const CurrentWeather = ({ weather }) => {
  if (!weather) return null;

  // eslint-disable-next-line react/prop-types
  const { temp, temp_min, temp_max, humidity } = weather.main;
  // eslint-disable-next-line react/prop-types
  const { speed, deg } = weather.wind;
  // eslint-disable-next-line react/prop-types
  const { description, icon } = weather.weather[0];

  return (
    <div className="current-weather-container">
      <h2>Current Weather</h2>
      <div className="current-weather-card">
        <div className="weather-icon">
          <img
            src={`http://openweathermap.org/img/w/${icon}.png`}
            alt={description}
          />
        </div>
        <div className="weather-info">
          <p className="weather-temp">{Math.round(temp)}°C</p>
          <p className="weather-description">{description}</p>
          <p className="weather-details">
            Min: {Math.round(temp_min)}° Max: {Math.round(temp_max)}°
          </p>
          <p className="weather-details">Humidity: {humidity}%</p>
          <p className="weather-details">
            Wind: {speed} m/s, {deg}°
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
