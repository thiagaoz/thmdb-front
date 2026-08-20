import AssistindoGrid from '../components/AssistindoGrid';
import Navbar from '../components/Navbar';

import assistindoData from "../data/assistindo.json";
import type { Atracao } from '../types';

function Assistindo () {
  const assistindo:Atracao[] = assistindoData

  return (
    <>
      <div className="header-container">
        <div className='titulo-principal'>
          <h1 className='nome neon'>Thiago's Movie Database</h1>
        </div>
        <Navbar selected='assistindo'/>
      </div>

      <main className="main-content">
        {assistindo && <AssistindoGrid atracoes={assistindo} />}
      </main>
    </>
  )
}

export default Assistindo
