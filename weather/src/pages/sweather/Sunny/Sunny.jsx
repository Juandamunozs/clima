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
      <h2>☀️ Soleado</h2>
      {sunnyData.length === 0 ? (
        <p>No data</p>
      ) : (
        <ul>
          {sunnyData.map((item, index) => (
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
