import { useState, useEffect } from 'react';
import './Rainy.css';

export default function Rainy({ weatherData }) {
  const [rainyData, setRainyData] = useState([]);

  useEffect(() => {
    const filtered = weatherData.filter(item =>
      ['rain', 'lluvia', 'lluvia ligera', 'lluvia fuerte', 'tormenta', 'thunderstorm'].includes(
        item.descripcion.toLowerCase().trim()
      )
    );
    setRainyData(filtered);
  }, [weatherData]);

  return (
    <div className="rainy-container">
      <div className="rain"></div>
      <h2>🌧️ LLuvia</h2>
      {rainyData.length === 0 ? (
        <p>No data</p>
      ) : (
        <ul>
          {rainyData.map((item, index) => (
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
