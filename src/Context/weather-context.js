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
    const apiKey = process.env.APPID;
    const apiData = await fetch(`${CURRENT_WEATHER}?q=${searchTerm},null&APPID=${apiKey}`);
    const apiJson = await apiData.json();
    setWeatherData(apiJson)
  }

  const value = {
    weatherData,
    setSearchTerm
  }

  return <weatherContext.Provider value={value}>{prop.children}</weatherContext.Provider>
}

export const useWeatherContext = () => useContext(weatherContext)