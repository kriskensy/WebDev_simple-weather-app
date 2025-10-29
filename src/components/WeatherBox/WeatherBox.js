import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Loader from '../Loader/Loader';
import { useCallback, useState } from 'react';
import ErrorBox from '../ErrorBox/ErrorBox';

const WeatherBox = props => {

  //TODO give your API key
  const YOUR_API_KEY = 'XXX';

  const [ data, setData ] = useState(null);
  const [ pending, setPending ] = useState(false);
  const [ errorActive, setErrorActive ] = useState(false);

  const handleCityChange = useCallback((city) => {
    setPending(true);
    setErrorActive(false);

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${YOUR_API_KEY}&units=metric`)
   .then(res => {
    if(res.status === 200){
      return res.json()
      .then(data => {
        setData(data);
        setPending(false);
      })
    } else {
      setErrorActive(true);
      setPending(false);
    }
    })}, []);

  return (
    <section>
      <PickCity action={handleCityChange}/>
      { (data && !pending && !errorActive) && <WeatherSummary data={data}/> }
      { (errorActive) && <ErrorBox/> }
      { (pending) && <Loader/> }
    </section>
  )
};

export default WeatherBox;