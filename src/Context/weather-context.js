import { useEffect, useContext, createContext, useState } from "react";
import { CURRENT_WEATHER } from '../../config/apiInfo'
const weatherContext = createContext();
import lookup from 'country-code-lookup';

export const WeatherProvider = (prop) => {
  const [weatherData, setWeatherData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('Rajasthan');

  useEffect(() => {
    fetchData();

  }, [searchTerm]);

  const fetchData = async () => {

    const getFipCode = lookup.byCountry(searchTerm);
    const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchTerm},${getFipCode}&APPID=04004575891aa41f0cabe0ea2fbfb149`);
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