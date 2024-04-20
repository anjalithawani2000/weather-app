import moment from "moment";
import { WiStrongWind, WiRaindrop } from "react-icons/wi";
import Card from "./Card";
import { useWeatherContext } from "../Context/weather-context";
import { isEmpty } from "lodash";

const SideInfo = () => {
  const { weatherData } = useWeatherContext();
  console.log(weatherData, 'ye h side bar')
  const { main, weather, sys } = weatherData;

  let currentTime = moment().format("hh:mm A");

  const isMorning = moment().isBetween(
    moment('4:00:00', 'hh:mm:ss'),
    moment('12:00:00', 'hh:mm:ss'),
  );

  const isNoon = moment().isBetween(
    moment('12:00:00', 'hh:mm:ss'),
    moment('16:00:00', 'hh:mm:ss'),
  );

  const isEvening = moment().isBetween(
    moment('16:00:00', 'hh:mm:ss'),
    moment('20:00:00', 'hh:mm:ss'),
  );

  return (
    <div className="outer-side-bar">
      <div className="first-info"> {isMorning ? 'Good Morning' : (isNoon ? 'Good Afternoon' : (isEvening ? 'Good Evening' : 'Good Night'))}</div>
      <div className="second-info">
        {currentTime}
      </div>
      {!isEmpty(weather) ?
        <>
          <div className="middle">
            <span id="title">{(main?.temp - 273.15).toFixed(2)}&deg;</span>
            <div className="setup-icon">
              <div ><WiStrongWind size={25} color="grey" />6.1mph</div>
              <div><WiRaindrop size={25} color="grey" />90%</div>
            </div>
          </div>
          <div className="desc">
            <span id="info">Feels Like {(main?.feels_like - 273.15).toFixed(2)}&deg;</span>
            <span id="info-1">{weather[0]?.main}</span>
          </div>
          <Card temp={main} detail={sys} />
        </> : <div className="DND"></div>
      }
    </div >


  )
}

export default SideInfo;