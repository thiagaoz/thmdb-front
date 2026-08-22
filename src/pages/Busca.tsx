import { useState } from 'react';
import Navbar from '../components/Navbar';
import atracoesData from '../data/atracao.json';
import assistindoData from '../data/assistindo.json';
import watchlistData from '../data/watchlist.json';
import type { Atracao } from '../types';
import BuscaGrid from '../components/BuscaGrid';


function Busca() {
  const [busca, setBusca] = useState<string>('');
  const [atracoesFiltradas, setAtracoesFiltradas] = useState<Atracao[] | null>(null);
  const [carregando, setCarregando] = useState<boolean>(false);

  const obterTmdbId = (atracao: Atracao): number | undefined => {
    if (atracao.tmdb_id != null) return atracao.tmdb_id;
    if (atracao.id.startsWith('tmdb_')) {
      const tmdbId = Number(atracao.id.slice(5));
      return Number.isNaN(tmdbId) ? undefined : tmdbId;
    }
    return undefined;
  };

  const handleBusca = async () => {
    setCarregando(true);
    const resultadosLocais = atracoesData.filter(atracao =>
      atracao.title.toLowerCase().includes(busca.toLowerCase())
    );
    const resultadosApi = busca.trim()
      ? await buscaAtracoesPorTitleAPI(busca)
      : [];
    const vistos = new Set([
      ...assistindoData.map(atracao => atracao.id),
      ...atracoesData.filter(atracao => atracao.rating_th != null).map(atracao => atracao.id),
    ]);
    const vistosTmdb = new Set(
      atracoesData
        .filter(atracao => atracao.rating_th != null && atracao.tmdb_id != null)
        .map(atracao => atracao.tmdb_id),
    );
    const naWatchlist = new Set(watchlistData.map(atracao => atracao.id));
    const naWatchlistTmdb = new Set(
      watchlistData
        .filter(atracao => atracao.tmdb_id != null)
        .map(atracao => atracao.tmdb_id),
    );
    const resultadosUnicos = new Map<string, Atracao>();

    [...resultadosLocais, ...resultadosApi].forEach(atracao => {
      const tmdbId = obterTmdbId(atracao);
      const chave = tmdbId != null
        ? `tmdb:${tmdbId}`
        : `imdb:${atracao.id}`;
      if (!atracao.id || resultadosUnicos.has(chave)) return;
      const estaNaWatchlist = naWatchlist.has(atracao.id) ||
        (tmdbId != null && naWatchlistTmdb.has(tmdbId));
      const estaVisto = vistos.has(atracao.id) ||
        (tmdbId != null && vistosTmdb.has(tmdbId));
      resultadosUnicos.set(chave, {
        ...atracao,
        statusBusca: estaVisto
          ? 'visto'
          : estaNaWatchlist
            ? 'watchlist'
            : 'nao-visto',
      });
    });

    const prioridadeStatus = {
      visto: 0,
      watchlist: 1,
      'nao-visto': 2,
    } as const;
    setAtracoesFiltradas(
      [...resultadosUnicos.values()].sort(
        (a, b) => prioridadeStatus[a.statusBusca || 'nao-visto'] -
          prioridadeStatus[b.statusBusca || 'nao-visto'],
      ),
    );
    setCarregando(false);
  };

  const buscaAtracoesPorTitleAPI = async (title: string): Promise<Atracao[]> => {
    try {
      const response = await fetch(`/api/busca-atracoes-title?title=${encodeURIComponent(title)}`);
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
        </div>
        <Navbar selected='busca' />
        <div className="search-bar">
          <label htmlFor="search">Buscar:</label>
          <input 
            className="input-field" 
            type="text" 
            placeholder=" The Matrix has you..." 
            value={busca} 
            onChange={(e) => setBusca(e.target.value)} 
            onKeyDown={(e) => {
              if (e.key === 'Enter' && busca.length >= 3) {
                handleBusca();
              }
            }}
          />
          <button className='link-button rating-btn submit-button' disabled={busca.length < 3} onClick={handleBusca}>IR</button>
        </div>
      </div>

      {/* Aqui está a correção: mova o BuscaGrid para fora do header-container */}
      <main className="main-content">
        {carregando ? (
          <h3 className="neon loading">Carregando...</h3>
        ) : (
          atracoesFiltradas && atracoesFiltradas.length === 0 && (
            <h3 className="neon loading">Nenhum resultado encontrado.</h3>
          )
        )}
        {atracoesFiltradas && !carregando && <BuscaGrid atracoes={atracoesFiltradas} />}
      </main>
    </>
  );
}

export default Busca;