import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Filmes from './pages/Filmes';
import Seriados from './pages/Seriados';
import Assistindo from './pages/Assistindo';
import Zero from '../private/Zero';

function App() {
  
  const local = import.meta.env.DEV;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filmes" element={<Filmes />} />
        <Route path="/seriados" element={<Seriados />} />
        <Route path="/assistindo" element={<Assistindo />} />
        {local &&
          <Route path="/zero" element={<Zero />} />
        }
      </Routes>
    </BrowserRouter>
  )
}

export default App
