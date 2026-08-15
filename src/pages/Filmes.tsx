import { useState } from 'react';
import Navbar from '../components/Navbar';
import atracoesData from '../data/atracao.json';
import type { Atracao } from '../types';
import AtracoesGrid from '../components/AtracoesGrid';

function Filmes() {
  const [atracoesSelecionadas, setAtracoesSelecionadas] = useState<Atracao[] | null>(null);

const atracoes = atracoesData.filter( atracao => atracao.type === "Movie");
const atracoesGOATs = atracoes.filter(atracao => atracao.rating_th === 10);
const atracoesExcelentes = atracoes.filter(atracao => atracao.rating_th > 7 && atracao.rating_th < 10); // nota 8 e 9 são consideradas excelentes
const atracoesBons = atracoes.filter(atracao => atracao.rating_th === 7); 
const atracoesMedianos = atracoes.filter(atracao => atracao.rating_th === 6);
const atracoesMaus = atracoes.filter(atracao => atracao.rating_th > 3 && atracao.rating_th < 6); // nota 4 e 5 são consideradas ruins
const atracoesFeios = atracoes.filter(atracao => atracao.rating_th < 3);

  return (
    <>
      <div className="header-container">
        <div className='titulo-principal'>
          <h1 className='nome neon'>Thiago's Movie Database</h1>
          <p>Sejam bem-vindos a minha lista de filmes, séries e mais.</p>
        </div>
        <Navbar />

        <div className='navbar rating-menu'>
          <button className='link-button rating-btn' onClick={() => setAtracoesSelecionadas(atracoesGOATs)}>GOATs</button>
          <button className='link-button rating-btn' onClick={() => setAtracoesSelecionadas(atracoesExcelentes)}>Excelentes</button>
          <button className='link-button rating-btn' onClick={() => setAtracoesSelecionadas(atracoesBons)}>Bons</button>
          <button className='link-button rating-btn' onClick={() => setAtracoesSelecionadas(atracoesMedianos)}>Medianos</button>
          <button className='link-button rating-btn' onClick={() => setAtracoesSelecionadas(atracoesMaus)}>Maus</button>
          <button className='link-button rating-btn' onClick={() => setAtracoesSelecionadas(atracoesFeios)}>E os Feios...</button>
        </div>
      </div>

      {/* A grid deve ficar fora da header-container para que a página possa rolar */}
      <main className="main-content">
        {atracoesSelecionadas && <AtracoesGrid atracoes={atracoesSelecionadas} />}
      </main>
    </>
  );
}

export default Filmes;