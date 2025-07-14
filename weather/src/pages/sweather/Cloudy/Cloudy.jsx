import { useState, useEffect } from 'react';
import './Cloudy.css';

export default function Cloudy({ weatherData }) {
  const [cloudyData, setCloudyData] = useState([]);

  useEffect(() => {
    const filtered = weatherData.filter(item =>
      ['cloudy', 'nublado', 'parcialmente nublado', 'overcast', 'cubierto'].includes(
        item.descripcion.toLowerCase()
      )
    );

    setCloudyData(filtered);
  }, [weatherData]);

  return (
    <div className="cloudy-container">
      <div className="cloud"></div>
      <h2>☁️ Parcialmente nublado</h2>
      {cloudyData.length === 0 ? (
        <p>No data</p>
      ) : (
        <ul>
          {cloudyData.map((item, index) => (
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
