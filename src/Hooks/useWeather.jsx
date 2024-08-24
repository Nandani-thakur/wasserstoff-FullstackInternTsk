import { useState, useEffect } from 'react';
import { getCurrentWeather, getForecast } from '../Services/weatherApi';

export const useWeather = (city, units) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city) {
      
      setCurrentWeather(null);
      setForecast(null);
      return;
    }

    const fetchWeather = async () => {
      try {
        setLoading(true);
        const weatherData = await getCurrentWeather(city, units);
        const forecastData = await getForecast(city, units);
        setCurrentWeather(weatherData.data);
        setForecast(forecastData.data);
      // eslint-disable-next-line no-unused-vars
      } catch (err) {
        setError('Unable to fetch weather data. Please check the city name.');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city, units]);

  return { currentWeather, forecast, loading, error };
};
