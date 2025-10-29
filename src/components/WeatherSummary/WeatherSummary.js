import styles from './WeatherSummary.module.scss';
import Loader from '../Loader/Loader';

const WeatherSummary = ({ data }) => {

  const weatherData = {
    city: data.name,
    temp: data.main.temp,
    icon: data.weather[0].icon,
    description: data.weather[0].main
  };

  return (
    <section className={styles.weatherSummary}>
      <img
        className={styles.weatherIcon}
        alt={weatherData.description}
        src={`${process.env.PUBLIC_URL}/images/weather-icons/${weatherData.icon}.png`} />
      <div className={styles.weatherInfo}>
        <h2>{weatherData.city}</h2>
        <p>
          <strong>Temp:</strong> {weatherData.temp}°C
        </p>
      </div>
    </section>
  );
};

export default WeatherSummary;