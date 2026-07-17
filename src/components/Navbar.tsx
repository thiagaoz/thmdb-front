import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const local = import.meta.env.DEV;

  return (
    <>
        <div className='navbar'>
            <Link to="/" className='link-button'>Home</Link>
            <Link to="/filmes" className='link-button'>Filmes</Link>
            <Link to="/seriados" className='link-button'>Séries</Link>
            <Link to="/assistindo" className='link-button'>Assistindo</Link>
            {local &&
                <Link to="/zero" className='link-button'>ZeRØ</Link>
            }
        </div>
    </>
  );
};

export default Navbar;
