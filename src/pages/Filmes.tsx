import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import RatingNavBar from '../components/RatingNavBar';
import isData from '../data/imdb.json';
import React from 'react';
import type { Atracao } from '../types';
import AtracoesGrid from '../components/AtracoesGrid';
import { buscaAtracoesOmdbApi } from '../services/buscaOmdbApi';

function Filmes() {

  const [atracoesSelecionadas, setAtracoesSelecionadas] = React.useState<Atracao[] | null>(null) ;

  const atracoesExcelentes = isData.filter(atracao => atracao.rating_th > 8);
  const atracoesBons = isData.filter(atracao => atracao.rating_th >= 6 && atracao.rating_th <= 8);
  const atracoesMaus = isData.filter(atracao => atracao.rating_th >= 3 && atracao.rating_th < 6);
  const atracoesFeios = isData.filter(atracao => atracao.rating_th < 3);


  const handleSetAtracao = async (atracoes:Atracao[]) => {
    const resultado = await buscaAtracoesOmdbApi(atracoes);
    setAtracoesSelecionadas(resultado);
  }
  /*
  useEffect ( () => {
    const carregaFilmes = async () => {

      const atracoesExcelentes: Atracao[] = 
    }
  })
    */

  return (
    <>
      <div className="header-container">
        <div className='titulo-principal'>
          <h1 className='nome neon'>Thiago's Movie Database</h1>
          <p>Sejam bem-vindos a minha lista de filmes, séries e mais.</p>
        </div>
        <Navbar />

        <div className='navbar rating-menu'>
            <button className='link-button rating-btn' onClick={()=> handleSetAtracao(atracoesExcelentes)}>Excelentes</button>
            <button className='link-button rating-btn' onClick={()=> handleSetAtracao(atracoesBons)}>Bons</button>
            <button className='link-button rating-btn' onClick={()=> handleSetAtracao(atracoesMaus)}>Maus</button>
            <button className='link-button rating-btn' onClick={()=> handleSetAtracao(atracoesFeios)}>E os Feios...</button>
        </div>
        { atracoesSelecionadas &&
          <AtracoesGrid atracoes={atracoesSelecionadas} />
        }
        
      </div>
    </>
  )
}

export default Filmes
 