import { useState, useEffect } from 'react';
import './Snow.css';

export default function Snow({ weatherData }) {
  const [snowData, setSnowData] = useState([]);

  useEffect(() => {
    const filtered = weatherData.filter(item =>
      ['snow', 'nieve'].includes(item.descripcion.toLowerCase().trim())
    );
    setSnowData(filtered);
  }, [weatherData]);

  return (
    <div className="snow-container">
      <div className="snow-animation">
        {[...Array(10)].map((_, i) => (
          <div className="snowflake" key={i}>❄</div>
        ))}
      </div>
      <h2>❄️ Nevando</h2>
      {snowData.length === 0 ? (
        <p>No data</p>
      ) : (
        <ul>
          {snowData.map((item, index) => (
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
