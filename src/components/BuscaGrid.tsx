import './AssistindoGrid.css';
import './BuscaGrid.css';
import React from 'react';
import type { Atracao } from '../types';
import noPoster from '../assets/no_poster.png'

type Props = {
  atracoes: Atracao[];
  mostrarStatus?: boolean;
};

const BuscaGrid: React.FC<Props> = ({ atracoes, mostrarStatus = true }) => {

  const ratingEstrelas = (nota: number): string => {
    let estrelas = Math.round(nota / 2); // Arredonda para uma casa decimal
    let rating = '⭐'.repeat(estrelas);
    return rating;
  }

  return (
    <div className="atracoes-grid">
      {atracoes.map((atracao) => (
        <article key={atracao.id} className={`atracao-card ${atracao.statusBusca || (atracao.rating_th != null ? 'visto' : 'nao-visto')}`}>
          <h2>{atracao.title}</h2>
          <img
            src={atracao.poster || noPoster}
            alt={atracao.title || 'Cartaz de '+ atracao.title}
            onError={(e) => {
              // Impede loop infinito caso a própria imagem 'noPoster' falhe
              e.currentTarget.onerror = null; 
              e.currentTarget.src = noPoster;
            }}
          />
          {mostrarStatus && (
            <h2>{atracao.statusBusca === 'watchlist'
              ? 'Na lista'
              : atracao.statusBusca === 'visto' || atracao.rating_th != null
                ? ratingEstrelas(atracao.rating_th || 0)
                : 'Não Visto'}</h2>
          )}
        </article>
      ))}
    </div>
  );
};

export default BuscaGrid;
