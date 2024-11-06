import React from 'react'
import './button.css'

function Button({icon, href, name, bgColor = '#ff3700', color='#ffffff'}) {
  return (
    <a href={href} className="mainBtn" style={{color: color, background:bgColor}}>
       {icon} {name}
    </a>
  )
}

export default Button