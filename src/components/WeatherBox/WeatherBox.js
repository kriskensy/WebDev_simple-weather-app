import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Loader from '../Loader/Loader';
import { useCallback, useState } from 'react';

const WeatherBox = props => {

  const [ data, setData ] = useState(null);
  //TODO give your API key
  const YOUR_API_KEY = 'XXX';

  const handleCityChange = useCallback((city) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${YOUR_API_KEY}&units=metric`)
   .then(res => res.json())
   .then(data => {
     console.log(data);
     setData(data);
   });
  }, []);

  return (
    <section>
      <PickCity action={handleCityChange}/>
      <WeatherSummary data={data}/>
      <Loader />
    </section>
  )
};

export default WeatherBox;