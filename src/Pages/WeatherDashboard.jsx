
import  { useState } from 'react';
import SearchBar from '../Components/SearchBar';
import CurrentWeather from '../Components/CurrentWeather';
import Forecast from '../Components/Forecast';
import UnitToggle from '../Components/UnitToggle';
import { useWeather } from '../Hooks/useWeather';
import './WeatherDashboard.css';

const WeatherDashboard = () => {
  const [city, setCity] = useState('');
  const [units, setUnits] = useState('metric');
  const { currentWeather, forecast, loading, error } = useWeather(city, units);

  const handleSearch = (newCity) => {
    setCity(newCity);
  };

  const handleToggleUnits = () => {
    setUnits(units === 'metric' ? 'imperial' : 'metric');
  };

  return (
    <div className="weather-dashboard">
      <div className="search-unit-container">
        <SearchBar onSearch={handleSearch} />
        <UnitToggle units={units} onToggle={handleToggleUnits} />
      </div>
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {city && (
        <div className="both">
          {currentWeather && <CurrentWeather weather={currentWeather} />}
          {forecast && <Forecast forecast={forecast} />}
        </div>
      )}
    </div>
  );
};

export default WeatherDashboard;
