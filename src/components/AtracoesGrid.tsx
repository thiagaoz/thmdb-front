import './AtracoesGrid.css';
import React from 'react';
import type { Atracao } from '../types';
import noPoster from '../assets/no_poster.png'

type Props = {
  atracoes: Atracao[];
};

const AtracoesGrid: React.FC<Props> = ({ atracoes }) => {


  return (
    <div className="atracoes-grid">
      {atracoes.map((atracao) => (
        <article key={atracao.id} className="atracao-card">
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
          
        </article>
      ))}
    </div>
  );
};

export default AtracoesGrid;
