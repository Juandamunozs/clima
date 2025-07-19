import { useState, useEffect } from 'react';
import './Cloudy_night.css'; 

export default function CloudyNight({ weatherData }) {
  const [cloudyNightData, setCloudyNightData] = useState([]);

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
      const periodo = item.dayPeriod?.toLowerCase(); 
      return cloudyKeywords.includes(desc) && periodo === 'noche';
    });

    setCloudyNightData(filtered);
  }, [weatherData]);

  return (
    <div className="cloudy-night-container">
      <div className="sky-elements-night">
        <div className="cloudy-moon"></div>
        <div className="cloudy-cloud-night"></div>
      </div>

      {cloudyNightData.length === 0 ? (
        <p className="no-data">No hay datos disponibles para la noche nublada.</p>
      ) : (
        <ul className="city-list">
          {cloudyNightData.map((item, index) => (
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
                🌙 <strong>Temperatura:</strong> {item.temperatura} &nbsp;&nbsp;|&nbsp;&nbsp;
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
