import { useState, useEffect } from 'react';
import './Fog.css';

export default function Fog({ weatherData }) {
  const [fogData, setFogData] = useState([]);

  useEffect(() => {
    const filtered = weatherData.filter(item =>
      ['fog', 'mist', 'niebla'].includes(item.descripcion.toLowerCase().trim())
    );
    setFogData(filtered);
  }, [weatherData]);

  return (
    <div className="fog-container">
      <div className="fog"></div>
      <h2>🌫️ Niebla </h2>
      {fogData.length === 0 ? (
        <p>No data</p>
      ) : (
        <ul>
          {fogData.map((item, index) => (
            <li key={index}>
              📍 <strong>{item.city} ({item.zone})</strong> - {item.department} - {item.country}
              <br />
              🌥️ <strong>Temperatura:</strong> {item.temperatura} &nbsp; - &nbsp;
              <strong>Humedad:</strong> {item.humedad}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
