import { useState, useEffect } from 'react';
import './Fog.css';

export default function Fog({ weatherData }) {
  const [fogData, setFogData] = useState([]);

  useEffect(() => {
    const filtered = weatherData.filter(item =>
      ['fog', 
        'mist', 
        'niebla'].includes(item.descripcion.toLowerCase().trim())
    );
    setFogData(filtered);
  }, [weatherData]);

  return (
    <div className="fog-container">
      <div className="fog">
        <div className="fog-cloud cloud-a"></div>
        <div className="fog-cloud cloud-b"></div>
        <div className="fog-cloud cloud-c"></div>
        <div className="fog-cloud cloud-d"></div>
      </div>
      {fogData.length === 0 ? (
        <p>No hay datos disponibles.</p>
      ) : (
        <ul className="city-list">
          {fogData.map((item, index) => (
            <li key={index} className="city-card">
              <div className="weather-description">
                <em>{item.descripcion}</em>
              </div>
              <div className="city-header">
                📍 <strong>{item.city} ({item.zone})</strong>
              </div>
              <div className="city-details">
                🏛️ {item.department} – {item.country}
                <br />
                🌫️ <strong>Temperatura:</strong> {item.temperatura} &nbsp;&nbsp;|&nbsp;&nbsp;
                💧 <strong>Humedad:</strong> {item.humedad}
                <br />
                ⌛️ <strong>Periodo:</strong> {item.dayPeriod === "Dia" ? "🌞 Día" : "🌙 Noche"} &nbsp;&nbsp;|&nbsp;&nbsp;
                🕐 <strong>Hora:</strong> {item.now}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
