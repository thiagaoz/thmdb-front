
import { Link } from 'react-router-dom';
import Navbar from '../src/components/Navbar';

function Zero() {

  return (
    <>
      <div className="header-container">
        <div className='titulo-principal'>
          <h1 className='nome neon'>Thiago's Movie Database</h1>
          <p>Menu secreto para administração da página</p>
        </div>
            <Navbar />
      </div>
    </>
  )
}

export default Zero
