
// eslint-disable-next-line react/prop-types
const Forecast = ({ forecast }) => {
  if (!forecast) return null;

  // eslint-disable-next-line react/prop-types
  const forecastItems = forecast.list.slice(0, 5).map((item) => {
    const { dt_txt, main, weather } = item;
    const { temp } = main;
    const { description, icon } = weather[0];

    return (
      <div key={dt_txt} className="forecast-item">
        <p className="forecast-date">{new Date(dt_txt).toLocaleDateString()}</p>
        <img 
          src={`http://openweathermap.org/img/w/${icon}.png`} 
          alt={description} 
          className="forecast-icon"
        />
        <p className="forecast-temp">{Math.round(temp)}°C</p>
        <p className="forecast-desc">{description}</p>
      </div>
    );
  });

  return (
    <div className='forecast-container'>
      <h2>5 - Day Forecast</h2>
      <div className='forecast-grid'>
        {forecastItems}
      </div>
    </div>
  );
};

export default Forecast;
