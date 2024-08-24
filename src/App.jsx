// src/App.js

import './App.css';
import '../src/index.css'
import 'aos/dist/aos.css';
import WeatherDashboard from './Pages/WeatherDashboard';

const App = () => {
  return (
    <div className='weather-app'>
       <div className='weather-content'>
      <WeatherDashboard />
      </div>

    </div>
  );
};

export default App;
