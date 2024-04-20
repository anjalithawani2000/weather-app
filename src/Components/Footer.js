import lookup from 'country-code-lookup';

const Footer = (props) => {
  const { state, country } = props;
  const countryInfo = lookup.byFips(country);
  return (
    <div className="footer">
      <div className="country">{state}</div>
      <div className="country">{countryInfo.country}</div>
    </div>
  )
}

export default Footer;