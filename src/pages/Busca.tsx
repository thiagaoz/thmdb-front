
import Navbar from '../components/Navbar';
import atracoesData from '../data/atracao.json';


function Busca() {

const atracoes = atracoesData.filter( atracao => atracao.type == "TV Series" || atracao.type == "TV Mini Series");

  return (
    <>
      <div className="header-container">
        <div className='titulo-principal'>
          <h1 className='nome neon'>Thiago's Movie Database</h1>
          <p>Sejam bem-vindos a minha lista de filmes, séries e mais.</p>
        </div>
        <Navbar />

      </div>

    </>
  );
}

export default Busca;