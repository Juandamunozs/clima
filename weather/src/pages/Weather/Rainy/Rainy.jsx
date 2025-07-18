import { useState, useEffect } from 'react';
import './Rainy.css';

export default function Rainy({ weatherData }) {
  const [rainyData, setRainyData] = useState([]);

  useEffect(() => {
    const filtered = weatherData.filter(item =>
      ['rain', 'lluvia', 
        'lluvia ligera', 
        'lluvia fuerte', 
        'tormenta', 
        'thunderstorm', 
        'lluvia  moderada a intervalos'].includes(
        item.descripcion.toLowerCase().trim()
      )
    );
    setRainyData(filtered);
  }, [weatherData]);

  return (
    <div className="rainy-container">
      <div className="rainy-sky">
        <div className="rainy-cloud cloud-left">
          <span className="raindrop drop1"></span>
          <span className="raindrop drop2"></span>
        </div>
        <div className="rainy-cloud cloud-right">
          <span className="raindrop drop3"></span>
          <span className="raindrop drop4"></span>
        </div>
      </div>
      {rainyData.length === 0 ? (
        <p className="no-data">No hay datos disponibles.</p>
      ) : (
        <ul className="city-list">
          {rainyData.map((item, index) => (
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
                🌧️ <strong>Temperatura:</strong> {item.temperatura} &nbsp;&nbsp;|&nbsp;&nbsp;
                💧 <strong>Humedad:</strong> {item.humedad}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
