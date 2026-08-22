import '../index.css'
import React from 'react';
import type { Atracao } from '../types';
import imdbLogo from '../assets/IMDB_Logo.png';
import atracoes from '../data/atracao.json';
import noPoster from '../assets/no_poster.png'
import Navbar from '../components/Navbar';
import NavbarMobile from '../components/NavbarMobile';

function Home() {


  const [atracao, setAtracao] = React.useState<Atracao | null>(null);
  const [carregando, setCarregando] = React.useState<boolean>(true);
  const topAtracoes:Atracao[] =  atracoes.filter((atracao) => atracao.rating_th! >= 9) ;

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
  
  /*
  const filmes: Atracao[] = atracoes.filter((atracao) => atracao.type === 'Movie')
  
  const RuntimeTotal = (): string => {
    const totalRuntime = filmes.reduce((acc, curr) => acc + (curr.runtime || 0), 0);
    const dias = Math.floor(totalRuntime / (60 * 24));
    const horas = Math.floor((totalRuntime % (60 * 24)) / 60);
    const minutos = totalRuntime % 60;
    return (`${dias} dias ${horas} horas ${minutos} minutos`);
  }
    */


  React.useEffect(() => {
    const carregaSugestao = async () => {
      if (topAtracoes.length === 0) {
        setCarregando(false);
        return;
      }

      // 1. Sorteia e busca na API imediatamente
      setAtracao(topAtracoes[Math.floor(Math.random() * topAtracoes.length)]);

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
        </div>
        {isMobile ? <NavbarMobile selected='home' /> : <Navbar selected='home' />}
        
         {/*
        <div className="quantidade-container">
          <div>
            <span className="quantidades neon">Filmes:</span>
            <span>{qtdFilmes}</span>
          </div>
           
          <div>
            <span className="quantidades neon">Tempo:</span>
            <span>{RuntimeTotal()}</span>
          </div>
          
        </div>
         */ }
      </div>

      <div className="sugestao-container">
      {carregando ? (
        <>
          <div className="poster-container">
            <h3 className="neon loading">Carregando...</h3>
          </div>
        </>
      ) : (
        atracao && (
          <>
            <div className="poster-container">
              <img className="neon-border poster" 
                src={atracao.poster || noPoster}
                alt={atracao.title || 'Cartaz de '+ atracao.title}
                onError={(e) => {
                  // Impede loop infinito caso a própria imagem 'noPoster' falhe
                  e.currentTarget.onerror = null; 
                  e.currentTarget.src = noPoster;
                }}
              />
            </div>
            <div className="atracao-info-container">
              <h3 className="neon">{atracao.title}</h3>
              <p>Ano: {atracao.year}</p>
              <p>Tipo: {atracao.type}</p>
              {atracao.seasons && <p>Temporadas: {atracao.seasons}</p>}
              <p className="genero font-pqna">Gênero: {atracao.genre}</p>
              <p className="plot font-pqna">{atracao.plot}</p>
              <a 
                href={`https://www.imdb.com/title/${atracao?.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                    className='mini-logo'
                    src={imdbLogo}
                    alt="link para atração no IMDB"
                />
              </a>
            </div>
          </>
        )
      )}
    </div>
    </>
  )
}

export default Home