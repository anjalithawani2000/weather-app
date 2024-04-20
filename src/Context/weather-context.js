import { useEffect, useContext, createContext, useState } from "react";
import { CURRENT_WEATHER } from '../../config/apiInfo'
const weatherContext = createContext();

export const WeatherProvider = (prop) => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    fetchData();

  }, []);

  const fetchData = async () => {
    const apiData = await fetch(CURRENT_WEATHER);
    const apiJson = await apiData.json();
    setWeatherData(apiJson)
  }
  return <weatherContext.Provider value={weatherData}>{prop.children}</weatherContext.Provider>
}

export const useWeatherContext = () => useContext(weatherContext)