import moment from "moment";
import { WiStrongWind, WiRaindrop } from "react-icons/wi";
import Footer from "./Footer";
import { useWeatherContext } from "../Context/weather-context";
import { isEmpty } from 'lodash';
import Search from "./Serach";
// import { useWeatherContext } from "../Context/weather-context";

const Header = () => {
  const currentDate = moment();
  const weatherData = useWeatherContext();


  // Format the date in the desired format
  const formattedDate = currentDate.format('DD.MM.YYYY');
  const { main, weather } = weatherData
  return (isEmpty(weatherData)) ?
    (<h1>Loading</h1>) :
    (
      <div className="outer">
        <div className="main">
          <div className="align-src-date">
            <Search />

            <h3 className="date">{formattedDate}</h3>
          </div>
          <div className="temp">20&deg;
            {/* {(main?.temp - 273.15).toFixed(2)}&deg; */}
          </div>
          <h3 className="detail">cloud</h3>
          {/* {weather[0].main} </h3> */}

          <Footer />


        </div >
      </div >
    )
}

export default Header


