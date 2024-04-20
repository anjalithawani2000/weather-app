import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint, faTachometerAlt, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Card = () => {
  return (
    <div className="main-card">
      <p id="text-cls"><FontAwesomeIcon icon={faTachometerAlt} style={{ color: 'green', fontSize: '1.2em' }} /> Pressure:1014</p>

      <p id="text-cls"><FontAwesomeIcon icon={faTint} style={{ color: 'blue', fontSize: '1.2em' }} /> Humidity: 20</p>
      <p id="text-cls"><FontAwesomeIcon icon={faSun} style={{ color: 'orange', fontSize: '1.2em' }} /> 4.00</p>
      <p id="text-cls"><FontAwesomeIcon icon={faMoon} style={{ color: 'purple', fontSize: '1.2em' }} /> Rainy</p>
    </div>
  )
}

export default Card;