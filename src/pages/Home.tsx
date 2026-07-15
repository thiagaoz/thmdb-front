import '../index.css'
import React from 'react';
import type { Atracao } from '../types';
import { Link } from 'react-router-dom';
import idsData from '../data/imdb_ids.json';
import { buscaAtracoesOmdbApi } from '../services/buscaOmdbApi';
import posterVazio from "../assets/postervazio.png";

function Home() {
  const [atracao, setAtracao] = React.useState<Atracao | null>(null);
  const [carregando, setCarregando] = React.useState<boolean>(true);
  const topAtracoes = idsData.filter(atracao => atracao.rating_th! >= 9) ;

  React.useEffect(() => {
    const carregaSugestao = async () => {
      if (topAtracoes.length === 0) {
        setCarregando(false);
        return;
      }

      // 1. Sorteia e busca na API imediatamente
      const sugestao: Atracao = topAtracoes[Math.floor(Math.random() * topAtracoes.length)];
      const sugestaoOmdb = await buscaAtracoesOmdbApi([sugestao]).then(data => data[0]);  
      
      setAtracao(sugestaoOmdb);

      // 2. Espera 1 segundo para sumir com o texto "Carregando..."
      setTimeout(() => {
        setCarregando(false);
      }, 300);
    };

    carregaSugestao();
  }, []);

  return (
    <>
      <div className="header-container">
        <div className='titulo-principal'>
          <h1 className='nome neon'>Thiago's Movie Database</h1>
          <p>Sejam bem-vindos a minha lista de filmes, séries e mais.</p>
        </div>
        <div className='navbar'>
          <Link to="/" className='link-button'>Home</Link>
          <Link to="/filmes" className='link-button'>Filmes</Link>
          <Link to="/seriados" className='link-button'>Séries</Link>
          <Link to="/assistindo" className='link-button'>Assistindo</Link>
        </div>
      </div>

      <div className="sugestao-container">
      {carregando ? (
        /* 
        <>
          <div className="poster-container">
            <img className="neon-border poster-vazio" src={posterVazio} alt="Poster vazio" />
          </div>
          <div className="atracao-info-container">
            <p> </p>
            <h3 className="neon">Carregando...</h3>
            <p className="plot"> </p>
          </div>
        </>
        */ 
        <>
          <div className="poster-container">
            <h3 className="neon">Carregando...</h3>
          </div>
        </>
      ) : (
        atracao && (
          <>
            <div className="poster-container">
              <img className="neon-border poster" src={atracao.poster} alt={atracao.title} />
            </div>
            <div className="atracao-info-container">
              <p>{atracao.type}</p>
              <h3 className="neon">{atracao.title} ({atracao.year})</h3>
              <p className="plot">{atracao.plot}</p>
            </div>
          </>
        )
      )}
    </div>


    </>
  )
}

export default Home