import { useState, useEffect } from 'react';
import './Cloudy.css';

export default function Cloudy({ weatherData }) {
  const [cloudyData, setCloudyData] = useState([]);

  useEffect(() => {
    const cloudyKeywords = [
      'cloudy',
      'nublado',
      'parcialmente nublado',
      'overcast',
      'cubierto'
    ];

    const filtered = weatherData.filter(item => {
      const desc = item.descripcion?.toLowerCase().trim();
      return cloudyKeywords.includes(desc);
    });

    setCloudyData(filtered);
  }, [weatherData]);

  return (
    <div className="cloudy-container">
      <div className="sky-elements">
        <div className="cloudy-sun"></div>
        <div className="cloudy-cloud"></div>
      </div>

      {cloudyData.length === 0 ? (
        <p className="no-data">No hay datos disponibles.</p>
      ) : (
        <ul className="city-list">
          {cloudyData.map((item, index) => (
            <li key={index} className="city-card">
              <div className="weather-description">
                {item.descripcion}
              </div>
              <div className="city-header">
                📍 <strong>{item.city} ({item.zone})</strong>
              </div>
              <div className="city-details">
                🏛️ {item.department} – {item.country}
                <br />
                🌡️ <strong>Temperatura:</strong> {item.temperatura} &nbsp;&nbsp;|&nbsp;&nbsp;
                💧 <strong>Humedad:</strong> {item.humedad}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
