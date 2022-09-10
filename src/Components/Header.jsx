import React from 'react'
import logo from '../img/Starbucks-logo.png'
import '../Components/Header.css'

const Header = () => {
  return (
    <div>      
      <header className='container_menu'>
        <img src={logo} alt="" />
        <nav>
          <li><a href="#">Home</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">What's New</a></li>
          <li><a href="#">Contact us</a></li>
        </nav>
      </header>
    </div>
  )
}

export default Header