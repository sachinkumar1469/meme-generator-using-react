import React from 'react'
import logo from '../images/Logo.png'
const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt="" />
      <h3>Meme Generator</h3>
      <p>React Course - Project 3</p>
    </div>
  )
}

export default Header
