import dotenv from 'dotenv';
dotenv.config();
import { useEffect, useContext, createContext, useState } from "react";
import { CURRENT_WEATHER } from '../../config/apiInfo'
const weatherContext = createContext();

export const WeatherProvider = (prop) => {
  const [weatherData, setWeatherData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('Rajasthan');

  useEffect(() => { fetchData() }, [searchTerm]);

  const fetchData = async () => {
    try {
      const apiKey = process.env.APPID;
      const apiData = await fetch(`${CURRENT_WEATHER}?q=${searchTerm},null&APPID=${apiKey}`);

      if (!apiData.ok) {
        // If response status is not OK (not in range 200-299), throw an error
        throw new Error(`Failed to fetch weather data. Status: ${apiData.status}`);
      }

      const apiJson = await apiData.json();
      setWeatherData(apiJson);
    } catch (error) {
      // Handle the error
      console.error('Error fetching weather data:', error.message);
      // Optionally, you can also handle UI feedback for the error
    }
  }
  const value = {
    weatherData,
    setSearchTerm
  }

  return <weatherContext.Provider value={value}>{prop.children}</weatherContext.Provider>
}

export const useWeatherContext = () => useContext(weatherContext)