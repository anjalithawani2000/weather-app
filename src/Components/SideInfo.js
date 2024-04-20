import moment from "moment";
import { WiStrongWind, WiRaindrop } from "react-icons/wi";
import Card from "./Card";
const SideInfo = () => {
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
      <div className="middle">
        <span id="title">20&deg;</span>
        <div className="setup-icon">
          <div ><WiStrongWind size={25} color="grey" />6.1mph</div>
          <div><WiRaindrop size={25} color="grey" />90%</div>
        </div>
      </div>
      <div className="desc">
        <span id="info">Feels Like 19&deg;</span>
        <span id="info-1">Cloudy</span>
      </div>
      <div className="row-card">
        <Card />


      </div>
    </div>


  )
}

export default SideInfo;