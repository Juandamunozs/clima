// Instalar npm install react-router-dom

import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Nosotros from '../pages/Nosotros/Nosotros';
import Clima from '../pages/Clima/Clima';

export default function AppRoutes() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<Clima />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/clima" element={<Clima />} />
    </Routes>
  );
}
