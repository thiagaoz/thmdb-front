import '../index.css'
import React from 'react';
import type { Atracao } from '../types';
import { Link } from 'react-router-dom';
import idsData from '../data/imdb_ids.json';
import { buscaAtracoesOmdbApi } from '../services/buscaOmdbApi';

function Home() {
  const [atracao, setAtracao] = React.useState<Atracao | null>(null);
  const topAtracoes = idsData.filter(atracao => atracao.rating_th! >= 8) as Atracao[];

  React.useEffect(() => {
    const carregaSugestao = async () => {
      
      if (topAtracoes.length === 0) return;
      const sugestao : Atracao = topAtracoes[Math.floor(Math.random() * topAtracoes.length)];
      const sugestaoOmdb = await buscaAtracoesOmdbApi([sugestao]).then(data => data[0]);  

      setAtracao(sugestaoOmdb);
    };

    carregaSugestao();
  }, []);

  return (
    <>
      <h1>Thiago's Movie Database</h1>
      <p>Sejam bem-vindos a minha lista de filmes, séries, animes e shows de stand-up.</p>

      <Link to="/" className='link-button'>Home</Link>
      <Link to="/filmes" className='link-button'>Filmes</Link>
      <Link to="/seriados" className='link-button'>Séries</Link>
      <Link to="/standup" className='link-button'>Stand-up</Link>
      <Link to="/assistindo" className='link-button'>Assistindo</Link>

      <div>
        <h2  className="Sugestao">Sugestão</h2>
        <div>
          { atracao && (
            <div>
              <p>{atracao.type}</p>
              <h3>{atracao.title} ({atracao.year})  ⭐{atracao.rating_th}</h3>
              <img src={atracao.poster} alt={atracao.title} />
            </div>
          )}
        </div>
      </div>

    </>
  )
}

export default Home