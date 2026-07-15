
import { buscaAtracoesOmdbApi } from '../services/buscaOmdbApi'
import React from 'react';
import type { Atracao } from '../types';
import type Home from './Filmes';
import type Filmes from './Filmes';
import type Seriados from './Seriados';
import { Link } from 'react-router-dom';

function Assistindo () {

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
    </>
  )
}

export default Assistindo
