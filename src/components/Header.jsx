import React from 'react'

const Header = () => {
  return (
    <header className='container'>
      <div className="logo">
        <img src="./img/dc-logo.png" alt="logo" />
      </div>
      <div className="menuHeader">
        <ul id="menuHeader">
          <li>CHARACTERS</li>
          <li>COMICS</li>
          <li>MOVIES</li>
          <li>TV</li>
          <li>GMES</li>
          <li>COLLECTIBLES</li>
          <li>VIDEOS</li>
          <li>FANS</li>
          <li>NEWS</li>
          <li>SHOP</li>
        </ul>
      </div>

    </header>
  )
}

export default Header
