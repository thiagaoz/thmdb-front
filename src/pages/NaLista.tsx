import Navbar from '../components/Navbar';
import BuscaGrid from '../components/BuscaGrid';
import watchlistData from '../data/watchlist.json';
import type { Atracao } from '../types';

function NaLista() {
  const watchlist: Atracao[] = watchlistData.map(atracao => ({
    ...atracao,
    statusBusca: 'watchlist',
  }));

  return (
    <>
      <div className="header-container">
        <div className="titulo-principal">
          <h1 className="nome neon">Thiago's Movie Database</h1>
        </div>
        <Navbar selected="na-lista" />
      </div>

      <main className="main-content">
        {watchlist.length > 0 ? (
          <BuscaGrid atracoes={watchlist} mostrarStatus={false} />
        ) : (
          <h3 className="neon loading">Nenhum título na lista.</h3>
        )}
      </main>
    </>
  );
}

export default NaLista;
