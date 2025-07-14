import Sunny from '../Weather/Sunny/Sunny';
import Rainy from '../Weather/Rainy/Rainy';
import Cloudy from '../Weather/Cloudy/Cloudy';
import UnknownWeather from '../Weather/UnknownWeather/UnknownWeather'
import Fog from '../Weather/Fog/Fog';
import Snow from '../Weather/Snow/Snow';
import { useEffect, useState } from 'react';
import { getClima } from '../../api/weatherAPI';
import Loading_nube from '../../components/common/loading/Loading_nube';
import './Clima.css';

function Clima() {
  const [weather, setWeather] = useState(null); 

  useEffect(() => {
    async function fetchClima() {
      try {
        const climaData = await getClima();
        console.log('Clima:', climaData);
        setWeather(climaData); 
      } catch (error) {
        console.error('Error cargando clima:', error);
      }
    }

    fetchClima();
  }, []);

  if (!weather) {
    return (
      <div className="Clima">
        <Loading_nube />
      </div>
    );
  }

  const renderWeatherComponent = () => {
    const desc = weather.descripcion.toLowerCase();
    const temperatura = weather.temperatura.replace('+', '');

    const weatherClima = {
      ...weather,
      descripcion: desc,
      temperatura,
    };

    if (['sunny', 'soleado', 'clear', 'despejado'].includes(desc)) {
      return <Sunny weatherData={[weatherClima]} />;
    }

    if (
      ['partly cloudy', 'parcialmente nublado',
        'cloudy', 'nublado',
        'overcast', 'cubierto'].includes(desc)
    ) {
      return <Cloudy weatherData={[weatherClima]} />;
    }

    if (
      ['light rain', 'lluvia ligera',
        'heavy rain', 'lluvia fuerte',
        'rain', 'lluvia',
        'thunderstorm', 'tormenta'].includes(desc)
    ) {
      return <Rainy weatherData={[weatherClima]} />;
    }

    if (['snow', 'nieve'].includes(desc)) {
      return <Snow weatherData={[weatherClima]} />;
    }

    if (['mist', 'fog', 'niebla'].includes(desc)) {
      return <Fog weatherData={[weatherClima]} />;
    }

    return <UnknownWeather weatherData={[weatherClima]} />;
  };

  return (
    <div className='Clima'>
      {renderWeatherComponent()}
    </div>
  );
}

export default Clima;
