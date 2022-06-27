import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const scrollToTop = _ => {
  window.scrollTo(0, 0);
}

function Header() {
  const [menuButtonClass, setMenuButtonClass] = useState('menuButton');

  return (
    <header>
      <img className='headerLogo' src={require('./../images/phc_logo.jpeg')} alt="logo" />

      <button className={menuButtonClass} onClick={e => e.target.className === 'menuButton' ? setMenuButtonClass('menuButton open') : setMenuButtonClass('menuButton')} >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className='headerLinks'>
        <NavLink to='/' onClick={scrollToTop}><p>Home</p></NavLink>
        <NavLink to='/about' onClick={scrollToTop}><p>About</p></NavLink>
        <NavLink to='/services' onClick={scrollToTop}><p>Services</p></NavLink>
        <NavLink to='/business' onClick={scrollToTop}><p>Business Development</p></NavLink>
        <NavLink to='/products' onClick={scrollToTop}><p>Products to sell</p></NavLink>
        <NavLink to='/resources' onClick={scrollToTop}><p>Free resources</p></NavLink>
        <NavLink to='/tender' onClick={scrollToTop}><p>Grants</p></NavLink>
        <Link to='#contact' onClick={e => {
          e.preventDefault();
          window.location.href = '#contact';
          setMenuButtonClass('menuButton')
        }}><p>Contact/</p><p>Side effect</p></Link>
      </div>
      
    </header>
  )
}

export default Header