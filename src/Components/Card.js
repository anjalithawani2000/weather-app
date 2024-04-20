import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint, faTachometerAlt, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import moment
  from 'moment';
const Card = (props) => {

  const { temp, detail } = props;

  const timeMoment = moment.unix(detail?.sunrise);
  const sunrise = timeMoment.format('hh:mm:ss A');

  const timeMomentForSunset = moment.unix(detail?.sunset);
  const sunset = timeMomentForSunset.format('hh:mm:ss A');

  return (
    <div className="main-card">
      <p id="text-cls"><FontAwesomeIcon icon={faTachometerAlt} style={{ color: 'green', fontSize: '1.2em' }} /> Pressure:{temp?.pressure}</p>

      <p id="text-cls"><FontAwesomeIcon icon={faTint} style={{ color: 'blue', fontSize: '1.2em' }} /> Humidity: {temp?.humidity}</p>
      <p id="text-cls"><FontAwesomeIcon icon={faSun} style={{ color: 'orange', fontSize: '1.2em' }} /> {sunrise}</p>
      <p id="text-cls"><FontAwesomeIcon icon={faMoon} style={{ color: 'purple', fontSize: '1.2em' }} /> {sunset}</p>
    </div>
  )
}

export default Card;