import React from 'react'
import BurgerMenu from "./BurgerMenu"




const Header = ({ menuItems }) => {

  return (
    <header className='container'>
      <div className="logo">
        <img id="logo" src="./img/dc-logo.png" alt="logo" />
      </div>

      <nav>
        <BurgerMenu />

        <ul id="menuHeader">

          {/*Itero l' array di ogetti Items */}
          {menuItems.map((item) => (
            <li key={item.id}>
              <a href={item.href}
                className={item.title === "COMICS" ? "active" : ""}
              >{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>

    </header>

  )
}

export default Header
