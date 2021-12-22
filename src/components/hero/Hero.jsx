import React from 'react'
import './hero.css'
import logo from '../../static/logo.svg'
import burger from '../../static/icon-hamburger.svg'

function Hero() {
  return (
    <div className='hero'>
      <div className="container">
      <img src={logo} alt="" />
        <div className="nav">
          <ul className='navigation'>
            <li>About</li>
            <li>Discover</li>
            <li>Get Started</li>
          </ul>
        </div>
        <div className="menu-burger">
          <img src={burger} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero
