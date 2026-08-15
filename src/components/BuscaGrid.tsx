import './AssistindoGrid.css';
import './BuscaGrid.css';
import React from 'react';
import type { Atracao } from '../types';
import noPoster from '../assets/no_poster.png'

type Props = {
  atracoes: Atracao[];
};

const BuscaGrid: React.FC<Props> = ({ atracoes }) => {

  const ratingEstrelas = (nota: number): string => {
    let estrelas = Math.round(nota / 2); // Arredonda para uma casa decimal
    let rating = '⭐'.repeat(estrelas);
    return rating;
  }

  return (
    <div className="atracoes-grid">
      {atracoes.map((atracao) => (
        <article key={atracao.id} className= {atracao.rating_th ? 'atracao-card' : 'atracao-card nao-visto'}>
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
          <h2>{atracao.rating_th? ratingEstrelas(atracao.rating_th) : "Não Visto"}</h2>
        </article>
      ))}
    </div>
  );
};

export default BuscaGrid;
