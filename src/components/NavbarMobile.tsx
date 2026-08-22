import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarMobile.css';
import { House, Search } from 'lucide-react';

const NavbarMobile: React.FC<NavbarProps> = ({ selected, subMenu }) => {

  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
    if (selected!== ''){
      selected = '';
      subMenu = '';
    }
  };

  return (
    <>
      <div className='navbar-mobile'>
        <Link to="/" >
            <House className={selected === 'home' ? 'icon selected-mobile' : 'icon'} />
        </Link>

        <button className='link-button rating-btn' onClick={handleMenuClick}>
          Menu
        </button>

        <Link to="/busca" >
            <Search className={selected === 'busca' ? 'icon selected-mobile' : 'icon'} />
        </Link>

      </div>
      {menuOpen ? (
        <div className='menu-dropdown'>
            <Link to="/filmes" className={selected === 'filmes' ? 'link-button selected' : 'link-button'}>Filmes</Link>
            <Link to="/seriados" className={selected === 'seriados' ? 'link-button selected' : 'link-button'}>Seriados</Link>
            <Link to="/assistindo" className={selected === 'assistindo' ? 'link-button selected' : 'link-button'}>Assistindo</Link>
            <Link to="/na-lista" className={selected === 'na-lista' ? 'link-button selected' : 'link-button'}>Na Lista</Link>
        </div>
      ) : 
        <div className="page-title">    
          <h1 className="title neon" style={{ fontSize: '0.9rem', marginTop: '-0.2rem' }}>{selected === 'home' ? 'Sugestão' : selected.charAt(0).toUpperCase() + selected.slice(1) +` ${subMenu}`}</h1>  
        </div> 
      }
    {/*
        <div className='navbar menu-mobile'>
            <Link to="/" className={selected === 'home' ? 'icon selected' : 'icon'}>
              <House size={24} color="white" />
            </Link>
            <Link to="/filmes" className={selected === 'filmes' ? 'link-button selected' : 'link-button'}>Filmes</Link>
            <Link to="/seriados" className={selected === 'seriados' ? 'link-button selected' : 'link-button'}>Seriados</Link>
            <Link to="/assistindo" className={selected === 'assistindo' ? 'link-button selected' : 'link-button'}>Assistindo</Link>
            <Link to="/na-lista" className={selected === 'na-lista' ? 'link-button selected' : 'link-button'}>Na Lista</Link>
            <Link to="/busca" className={selected === 'busca' ? 'link-button selected' : 'link-button'}>Search</Link>
        </div>
    */}
    </>
  );
};

type NavbarProps = {
  selected: string;
  subMenu?: string;
};

export default NavbarMobile;
