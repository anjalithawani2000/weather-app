import moment from "moment";
import { WiStrongWind, WiRaindrop } from "react-icons/wi";
import Card from "./Card";
import { useWeatherContext } from "../Context/weather-context";
import { isEmpty } from "lodash";
import { getGreetInfo } from "../utils/getGreetInfo";
const SideInfo = () => {
  const { weatherData } = useWeatherContext();
  const { main, weather, sys } = weatherData;
  let currentTime = moment().format("hh:mm A");
  const greet = getGreetInfo();

  return (
    <>
      {(isEmpty(weatherData)) ?
        <></> :
        <div className="outer-side-bar">
          <div className="first-info">{greet}</div>
          <div className="second-info">{currentTime}</div>
          <div className="middle">
            <span id="title">{(main?.temp - 273.15).toFixed(2)}&deg;</span>
            <div className="setup-icon">
              <div>
                <WiStrongWind size={25} color="grey" />
                6.1mph
              </div>
              <div>
                <WiRaindrop size={25} color="grey" />
                90%
              </div>
            </div>
          </div>
          <div className="desc">
            <span id="info">
              Feels Like {(main?.feels_like - 273.15).toFixed(2)}&deg;
            </span>
            <span id="info-1">{weather[0]?.main}</span>
          </div>
          <Card temp={main} detail={sys} />
        </div>
      }
    </>
  );
};

export default SideInfo;
