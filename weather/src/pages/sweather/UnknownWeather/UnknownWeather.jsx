import './UnknownWeather.css';

function UnknownWeather({ weatherData }) {
  const [weather] = weatherData;

  return (
    <div className="unknown-weather-card">
      <h2>Clima desconocido 😶</h2>
      <p><strong>Descripción:</strong> {weather.descripcion || 'No disponible'}</p>
      <p><strong>Temperatura:</strong> {weather.temperatura || '--'}</p>
      <p><strong>Humedad:</strong> {weather.humedad || '--'}</p>
      <p className="warning">No se pudo determinar el tipo de clima para mostrar un componente específico.</p>
    </div>
  );
}

export default UnknownWeather;
