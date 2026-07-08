
import { buscaAtracoesOmdbApi } from '../services/buscaOmdbApi'
import React from 'react';
import type { Atracao } from '../types';
import type Home from './Filmes';
import type Filmes from './Filmes';
import { Link } from 'react-router-dom';

function Seriados() {
  const [atracao, setAtracao] = React.useState<Atracao | null>(null);


  return (
    <>
      <h1>Thiago's Movie Database</h1>
      <Link to="/" className='link-button'>Home</Link>        
      <Link to="/filmes" className='link-button'>Filmes</Link>
      <Link to="/seriados" className='link-button'>Séries</Link>
      <Link to="/standup" className='link-button'>Stand-up</Link>
      <Link to="/assistindo" className='link-button'>Assistindo</Link>
    </>
  )
}

export default Seriados
