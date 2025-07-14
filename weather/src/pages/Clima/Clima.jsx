import Sunny from '../sweather/Sunny/Sunny';
import Rainy from '../sweather/Rainy/Rainy';
import Cloudy from '../sweather/Cloudy/Cloudy';
import UnknownWeather from '../sweather/UnknownWeather/UnknownWeather'
import Loading from '../../components/common/loading/loading';
import Fog from '../sweather/Fog/Fog';
import Snow from '../sweather/Snow/Snow';

import { useEffect, useState } from 'react';
import { getClima } from '../../api/weatherAPI';

import './Clima.css';

function Clima() {
  const [weather, setWeather] = useState(null); // Estado para guardar el clima

  useEffect(() => {
    async function fetchClima() {
      try {
        const climaData = await getClima();
        console.log('Clima:', climaData);
        setWeather(climaData); // Guarda en estado
      } catch (error) {
        console.error('Error cargando clima:', error);
      }
    }

    fetchClima();
  }, []);

  // Si aún no se ha cargado el clima, muestra un mensaje
  if (!weather) {
    return (
      <div className="Clima">
        <Loading />
      </div>
    );
  }

  // Renderiza el componente de clima según el tipo
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
      <h1>Clima actual</h1>
      {renderWeatherComponent()}
    </div>
  );
}

export default Clima;
