import React from 'react';
import './NavListItem.css'
import { Link } from 'react-router-dom';

function NavListItem({nav}) {
  return (
    <li>
        <Link to={nav.link}>
          {nav.name}
        </Link>
    </li>
  )
}

export default NavListItem