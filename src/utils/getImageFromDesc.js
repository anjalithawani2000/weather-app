import rainy from '../../Assets/rainy.jpeg';
import cloud from '../../Assets/cloud3.jpg';
import spring from '../../Assets/spring.jpg';
import sunny from '../../Assets/sunny.jpg';
import snow from '../../Assets/snow.jpg'


const getImageFromDesc = (desc) => {
  const info = desc.toLowerCase()
  const image = (info == "clouds") ? cloud : (info == "rain") ? rainy : (info == "haze") ? spring : (info == "snow") ? snow : sunny;
  return image
}

export default getImageFromDesc;