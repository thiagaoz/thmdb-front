import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC<NavbarProps> = ({ selected }) => {

  return (
    <>
        <div className='navbar page-menu'>
            <Link to="/" className={selected === 'home' ? 'link-button selected' : 'link-button'}>Home</Link>
            <Link to="/filmes" className={selected === 'filmes' ? 'link-button selected' : 'link-button'}>Filmes</Link>
            <Link to="/seriados" className={selected === 'seriados' ? 'link-button selected' : 'link-button'}>Seriados</Link>
            <Link to="/assistindo" className={selected === 'assistindo' ? 'link-button selected' : 'link-button'}>Assistindo</Link>
            <Link to="/busca" className={selected === 'busca' ? 'link-button selected' : 'link-button'}>Buscar</Link>
        </div>
    </>
  );
};

type NavbarProps = {
  selected: string;
};

export default Navbar;
