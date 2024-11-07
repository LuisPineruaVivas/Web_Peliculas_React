import React from 'react'
import './button.css'
import { Link } from 'react-router-dom'

function Button({icon, href, name, bgColor = '#ff3700', color='#ffffff'}) {
  return (
    <Link to={href}>
      <a href="#!" className="mainBtn" style={{color: color, background:bgColor}}>
       {icon} {name}
      </a>
    </Link>
  )
}

export default Button