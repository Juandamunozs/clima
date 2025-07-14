import { useState, useEffect } from 'react';
import './Sunny.css';
export default function Sunny({ weatherData }) {
  const [sunnyData, setSunnyData] = useState([]);

  useEffect(() => {
    const filtered = weatherData.filter(item =>
      ['sunny', 'soleado', 'clear', 'despejado'].includes(
        item.descripcion.toLowerCase().trim()
      )
    );
    setSunnyData(filtered);
  }, [weatherData]);

  return (
    <div className="sunny-container">
      <div className="sun"></div>
      <h2>Soleado</h2>
      {sunnyData.length === 0 ? (
        <p>No data</p>
      ) : (
        <ul className="city-list">
          {sunnyData.map((item, index) => (
            <li key={index} className="city-card">
              <div className="city-header">
                📍 <strong>{item.city} ({item.zone})</strong>
              </div>
              <div className="city-details">
                🏛️ {item.department} – {item.country}
                <br />
                ☀️ <strong>Temperatura:</strong> {item.temperatura} &nbsp;&nbsp;|&nbsp;&nbsp;
                💧 <strong>Humedad:</strong> {item.humedad}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
