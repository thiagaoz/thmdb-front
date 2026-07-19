import './AtracoesGrid.css';
import React from 'react';
import type { Atracao } from '../types';

type Props = {
  atracoes: Atracao[];
};

const AtracoesGrid: React.FC<Props> = ({ atracoes }) => {


  return (
    <div className="atracoes-grid">
      {atracoes.map((atracao) => (
        <article key={atracao.id} className="atracao-card">
          <h2>{atracao.title}</h2>
          <img src={atracao.poster} alt={atracao.title} />
        </article>
      ))}
    </div>
  );
};

export default AtracoesGrid;
