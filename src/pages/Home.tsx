import '../index.css'
import { buscaAtracoesOmdbApi } from '../services/buscaOmdbApi'
import React from 'react';
import type { Atracao } from '../types';
import { Link } from 'react-router-dom';

function Home() {
  const [atracao, setAtracao] = React.useState<Atracao | null>(null);

  React.useEffect(() => {
    buscaAtracoesOmdbApi(['tt0111161']).then((atracoes) => {
      if (atracoes.length > 0) {
        setAtracao(atracoes[0]);
      }
    });
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

      <div className="Sugestao">
        <h2>Sugestão</h2>
        <div>
          { atracao && (
            <div>
              <h3>{atracao.title} ({atracao.releaseDate})</h3>
              <img src={atracao.poster} alt={atracao.title} />
            </div>
          )}
        </div>
      </div>

    </>
  )
}

export default Home