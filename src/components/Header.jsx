import React, { useState } from 'react';
import './header.css';
import NavListItem from './HeaderComponents/NavListItem';
import navListData from '../data/navListData';
import Button from './HeaderComponents/Button';
import Search from './HeaderComponents/search';

function Header({bool}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
        <a href="/" className='logo'> WebMovie</a>

        <ul className={`nav ${isMenuOpen ? 'open' : ''}`}>
            {
            navListData.map(nav => (
                <NavListItem key={nav._id} nav={nav} />
            ))
            }
            {bool && <li className="nav-item"><Search /></li>}      
            <Button icon={<ion-icon name="log-in-outline"></ion-icon>} href='/login' name='Iniciar Sesion'/>
        </ul>


        <div className="hamburger-menu" onClick={toggleMenu}>
          <ion-icon name={isMenuOpen ? 'close' : 'menu'}></ion-icon>
          <ul className={`nav ${isMenuOpen ? 'open' : ''}`}>
              {
              navListData.map(nav => (
                  <a className='mobile' key={nav._id} href={nav.link}>{nav.name}</a>
              ))
              }
              <a href="/searchPage" className="mobile">Buscar</a>
           </ul>
        </div>
    </header>
  )
}

export default Header;