import React from 'react'
import './footerNavItem.css'
import { Link } from 'react-router-dom';

function FooterNavItem({ name }) {
  return (
    <li>
        <ion-icon name="chevron-forward-outline"></ion-icon>
        <Link to={name.link}>
          {name.name}
        </Link>
    </li>
  )
}

export default FooterNavItem