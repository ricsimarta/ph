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
        <NavLink to='/' onClick={scrollToTop}><span className='capital'>H</span>ome</NavLink>
        <NavLink to='/about' onClick={scrollToTop}><span className='capital'>A</span>bout</NavLink>
        <NavLink to='/services' onClick={scrollToTop}><span className='capital'>S</span>ervices</NavLink>
        <NavLink to='/business' onClick={scrollToTop}><span className='capital'>B</span>usiness Development</NavLink>
        <NavLink to='/products' onClick={scrollToTop}><span className='capital'>P</span>roducts to sell</NavLink>
        <NavLink to='/resources' onClick={scrollToTop}><span className='capital'>F</span>ree resources</NavLink>
        <NavLink to='/tender' onClick={scrollToTop}><span className='capital'>G</span>rants</NavLink>
        <Link to='#contact' onClick={e => {
          e.preventDefault();
          window.location.href = '#contact';
          setMenuButtonClass('menuButton')
        }}><span className='capital'>C</span>ontact / <span className='capital'>S</span>ide effect</Link>
      </div>
      
    </header>
  )
}

export default Header