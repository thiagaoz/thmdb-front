import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {

  return (
    <>
        <div className='navbar page-menu'>
            <Link to="/" className='link-button'>Home</Link>
            <Link to="/filmes" className='link-button'>Filmes</Link>
            <Link to="/seriados" className='link-button'>Seriados</Link>
            <Link to="/assistindo" className='link-button'>Assistindo</Link>
            <Link to="/busca" className='link-button'>Buscar</Link>
        </div>
    </>
  );
};

export default Navbar;
