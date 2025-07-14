import './UnknownWeather.css';

function UnknownWeather({ weatherData }) {
  const [weather] = weatherData;

  return (
    <div className="unknown-weather-container">
      <div className="weather-icons-ring">
        <span className="weather-icon suni">☀️</span>
        <span className="weather-icon cloud">☁️</span>
        <span className="weather-icon rain">🌧️</span>
        <span className="weather-icon storm">⛈️</span>
        <span className="weather-icon snow">❄️</span>
        <span className="weather-icon fog">🌫️</span>
        <span className="weather-icon wind">💨</span>
      </div>
      <h2>Clima desconocido</h2>
      <ul className="city-list">
        {weatherData.map((item, index) => (
          <li key={index} className="city-card">
            <div className="city-header">
              📍 <strong>{item.city} ({item.zone})</strong>
            </div>
            <div className="city-details">
              🏛️ {item.department} – {item.country}
              <br />
              ❓<stong>Temperatura:</stong> {item.temperatura} &nbsp;&nbsp;|&nbsp;&nbsp;
              💧 <strong>Humedad:</strong> {item.humedad}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UnknownWeather;

