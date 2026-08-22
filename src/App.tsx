import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Filmes from './pages/Filmes';
import Seriados from './pages/Seriados';
import Assistindo from './pages/Assistindo';
import NaLista from './pages/NaLista';
import Busca from './pages/Busca';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filmes" element={<Filmes />} />
        <Route path="/seriados" element={<Seriados />} />
        <Route path="/assistindo" element={<Assistindo />} />
        <Route path="/na-lista" element={<NaLista />} />
        <Route path="/busca" element={<Busca />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
