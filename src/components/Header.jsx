import React from 'react'



const Header = ({ menuItems }) => {

  return (
    <header className='container'>
      <div className="logo">
        <img id="logo" src="./img/dc-logo.png" alt="logo" />
      </div>
      <nav>
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
        <button className="menu-toggle" aria-label="Toggle menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </nav>

    </header>
  )
}

export default Header
