import { useState } from 'react';
import Navbar from '../components/Navbar';
import atracoesData from '../data/atracao.json';
import type { Atracao } from '../types';
import BuscaGrid from '../components/BuscaGrid';


function Busca() {
  const [busca, setBusca] = useState<string>('');
  const [atracoesFiltradas, setAtracoesFiltradas] = useState<Atracao[] | null>(null);


  const handleBusca = async () => {
    const resultadosLocais = atracoesData.filter(atracao =>
      atracao.title.toLowerCase().includes(busca.toLowerCase())
    );
    const resultadosApi = busca.trim()
      ? await buscaAtracoesPorTitleAPI(busca)
      : [];
    setAtracoesFiltradas([...resultadosLocais, ...resultadosApi]);
  };

  const buscaAtracoesPorTitleAPI = async (title: string): Promise<Atracao[]> => {
    try {
      const response = await fetch(`http://localhost:8000/busca-atracoes-title?title=${encodeURIComponent(title)}`);
      const data = await response.json();
      return Array.isArray(data) ? (data as Atracao[]) : [];
    } catch (error) {
      console.error("Error fetching data from API:", error);
      return [];
    }
  };

  return (
    <>
      <div className="header-container">
        <div className='titulo-principal'>
          <h1 className='nome neon'>Thiago's Movie Database</h1>
          <p>Sejam bem-vindos a minha lista de filmes, séries e mais.</p>
        </div>
        <Navbar />
        <div className="search-bar">
          <label htmlFor="search">Buscar:</label>
          <input className="input-field" type="text" placeholder=" The Matrix has you..." value={busca} onChange={(e) => setBusca(e.target.value)} />
          <button className='link-button rating-btn submit-button' disabled={busca.length < 3} onClick={handleBusca}>IR</button>
        </div>
      </div>

      {/* Aqui está a correção: mova o BuscaGrid para fora do header-container */}
      <main className="main-content">
        {atracoesFiltradas && <BuscaGrid atracoes={atracoesFiltradas} />}
      </main>
    </>
  );
}

export default Busca;