import { useNavigate } from 'react-router-dom';
import './Home.css';
import '../styles/styles.css';

export default function Home() {
  const navigate = useNavigate();
  
  return (
    <div className="home-container">
      <h1>🌤️ Bienvenido a la app del clima</h1>
      <div className="home-buttons">
        <button className="btn" onClick={() => navigate('/nosotros')}>Sobre nosotros</button>
        <button className="btn" onClick={() => navigate('/clima')}>Ver clima</button>
      </div>
    </div>
  );
}
