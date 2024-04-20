import moment from "moment";

import Footer from "./Footer";
import { useWeatherContext } from "../Context/weather-context";
import { isEmpty } from 'lodash';
import Search from "./Serach";
import rainy from '../../Assets/rainy.jpeg'


const Header = () => {
  const currentDate = moment();
  const { weatherData, setSearchTerm } = useWeatherContext();

  // Format the date in the desired format
  const formattedDate = currentDate.format('DD.MM.YYYY');
  const { main, weather, name, sys } = weatherData
  return (
    <div className="outer">
      {(isEmpty(weatherData)) ?
        <center> <img src="https://cdn.pixabay.com/animation/2023/05/02/04/29/04-29-06-428_512.gif" width="100%" heigth="100%" style={{ marginLeft: "100%" }} /> </center> :
        (
          <div className="main" style={{ backgroundImage: `url(${rainy})` }}>
            <div className="align-src-date">
              <Search applySearch={setSearchTerm} />
              <h3 className="date">{formattedDate}</h3>
            </div>
            <div className="temp">{(main?.temp - 273.15).toFixed(2)}&deg;C</div>
            <h3 className="detail">{weather[0]?.main} </h3>
            <Footer state={name} country={sys?.country} />
          </div >
        )}
    </div >
  )
}

export default Header


