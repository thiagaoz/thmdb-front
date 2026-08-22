import { useState } from 'react';
import Navbar from '../components/Navbar';
import atracoesData from '../data/atracao.json';
import type { Atracao } from '../types';
import AtracoesGrid from '../components/AtracoesGrid';
import NavbarMobile from '../components/NavbarMobile';
import React from 'react';

function Filmes() {
  const [atracoesSelecionadas, setAtracoesSelecionadas] = useState<Atracao[] | null>(null);
  const [selected, setSelected] = useState<string>('');
  const [subMenu, setSubMenu] = useState<string>('');
  const [ratingMenuOpen, setRatingMenuOpen] = React.useState(true);

    const [isMobile, setIsMobile] = React.useState<boolean>(
      () => window.matchMedia('(max-width: 768px)').matches,
    );
  
    React.useEffect(() => {
      const mediaQuery = window.matchMedia('(max-width: 768px)');
      const handleResize = () => {
        setIsMobile(mediaQuery.matches);
      };
  
      handleResize();
      mediaQuery.addEventListener('change', handleResize);
  
      return () => {
        mediaQuery.removeEventListener('change', handleResize);
      };
    }, []);


const handleAtracoesSelecionadas = (selecao: string) => {
  const atracoes = atracoesData.filter( atracao => atracao.type === "Movie");
  setSubMenu(selecao);
  if (ratingMenuOpen) {
    setRatingMenuOpen(false);
  }
  let filteredAtracoes;
  switch (selecao) {
    case 'GOATs':
      filteredAtracoes = atracoes.filter(atracao => atracao.rating_th === 10);
      break;
    case 'Excelentes':
      filteredAtracoes = atracoes.filter(atracao => atracao.rating_th > 7 && atracao.rating_th < 10);
      break;
    case 'Bons':
      filteredAtracoes = atracoes.filter(atracao => atracao.rating_th === 7);
      break;
    case 'Medianos':
      filteredAtracoes = atracoes.filter(atracao => atracao.rating_th === 6);
      break;
    case 'Maus':
      filteredAtracoes = atracoes.filter(atracao => atracao.rating_th > 3 && atracao.rating_th < 6);
      break;
    case 'Feios':
      filteredAtracoes = atracoes.filter(atracao => atracao.rating_th < 3);
      break;
    default:
      filteredAtracoes = null;
  }

  setAtracoesSelecionadas(filteredAtracoes);
  setSelected(selecao);
};


  return (
    <>
      <div className="header-container">
        <div className='titulo-principal'>
          <h1 className='nome neon'>Thiago's Movie Database</h1>
        </div>
        {isMobile ? 
          <>
            <NavbarMobile selected='filmes' subMenu={subMenu}/> 
            {ratingMenuOpen ? (
              <div className='menu-dropdown'>
                <button className={selected === 'GOATs' ? 'link-button rating-btn selected' : 'link-button rating-btn'} onClick={() => handleAtracoesSelecionadas('GOATs')}>GOATs</button>
                <button className={selected === 'Excelentes' ? 'link-button rating-btn selected' : 'link-button rating-btn'} onClick={() => handleAtracoesSelecionadas('Excelentes')}>Excelentes</button>
                <button className={selected === 'Bons' ? 'link-button rating-btn selected' : 'link-button rating-btn'} onClick={() => handleAtracoesSelecionadas('Bons')}>Bons</button>
                <button className={selected === 'Medianos' ? 'link-button rating-btn selected' : 'link-button rating-btn'} onClick={() => handleAtracoesSelecionadas('Medianos')}>Medianos</button>
                <button className={selected === 'Maus' ? 'link-button rating-btn selected' : 'link-button rating-btn'} onClick={() => handleAtracoesSelecionadas('Maus')}>Maus</button>
                <button className={selected === 'Feios' ? 'link-button rating-btn selected' : 'link-button rating-btn'} onClick={() => handleAtracoesSelecionadas('Feios')}>E os Feios...</button>
              </div>
            ) : 
              null
            }
          </>
          :
          <>
          <Navbar selected='filmes' />
          <div className='navbar rating-menu'>
            <button className={selected === 'GOATs' ? 'link-button rating-btn selected' : 'link-button rating-btn'} onClick={() => handleAtracoesSelecionadas('GOATs')}>GOATs</button>
            <button className={selected === 'Excelentes' ? 'link-button rating-btn selected' : 'link-button rating-btn'} onClick={() => handleAtracoesSelecionadas('Excelentes')}>Excelentes</button>
            <button className={selected === 'Bons' ? 'link-button rating-btn selected' : 'link-button rating-btn'} onClick={() => handleAtracoesSelecionadas('Bons')}>Bons</button>
            <button className={selected === 'Medianos' ? 'link-button rating-btn selected' : 'link-button rating-btn'} onClick={() => handleAtracoesSelecionadas('Medianos')}>Medianos</button>
            <button className={selected === 'Maus' ? 'link-button rating-btn selected' : 'link-button rating-btn'} onClick={() => handleAtracoesSelecionadas('Maus')}>Maus</button>
            <button className={selected === 'Feios' ? 'link-button rating-btn selected' : 'link-button rating-btn'} onClick={() => handleAtracoesSelecionadas('Feios')}>E os Feios...</button>
          </div>
          </>
        }
      </div>

      {/* A grid deve ficar fora da header-container para que a página possa rolar */}
      <main className="main-content">
        {atracoesSelecionadas && <AtracoesGrid atracoes={atracoesSelecionadas} />}
      </main>
    </>
  );
}

export default Filmes;