import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Loader from '../Loader/Loader';
import { useCallback, useState } from 'react';

const WeatherBox = props => {

  const [ data, setData ] = useState(null);
  const [ pending, setPending ] = useState(false);

  //TODO give your API key
  const YOUR_API_KEY = 'XXX';

  const handleCityChange = useCallback((city) => {
    setPending(true);
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${YOUR_API_KEY}&units=metric`)
   .then(res => res.json())
   .then(data => {
     console.log(data);
     setData(data);
     setPending(false);
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