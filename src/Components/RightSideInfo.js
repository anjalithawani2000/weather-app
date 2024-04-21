import moment from "moment";
import Footer from "./Footer";
import { useWeatherContext } from "../Context/weather-context";
import { isEmpty } from 'lodash';
import Search from "./Search";
import getImageFromDesc from "../utils/getImageFromDesc";
import Spinner from "./Spinner";
import { KELVIN_VALUE, DECIMAL_FIXED } from "../utils/constants";

const RightSideInfo = () => {
  const currentDate = moment();
  const { weatherData, setSearchTerm } = useWeatherContext();
  const { main, weather, name, sys } = weatherData
  let image;
  // Format the date in the desired format
  const formattedDate = currentDate.format('DD.MM.YYYY');
  if (!isEmpty(weather)) {
    image = getImageFromDesc(weather[0]?.main);
  }

  return (
    <div className="outer">
      {(isEmpty(weatherData)) ?
        <Spinner /> :
        (
          <div className="main" style={{ backgroundImage: `url(${image})` }}>
            <div className="align-src-date">
              <Search applySearch={setSearchTerm} />
              <h3 className="date">{formattedDate}</h3>
            </div>
            <div className="temp">{(main?.temp - KELVIN_VALUE).toFixed(DECIMAL_FIXED)}&deg;C</div>
            <h3 className="detail">{weather[0]?.main} </h3>
            <Footer state={name} country={sys?.country} />
          </div >
        )}
    </div >
  )
}

export default RightSideInfo


