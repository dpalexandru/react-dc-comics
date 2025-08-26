import React from 'react'

{/*Creo array di ogetti Items */ }
const menuItems = [
  { id: 1, href: "#", title: "CHARACTERS" },
  { id: 2, href: "#", title: "COMICS" },
  { id: 3, href: "#", title: "MOVIES" },
  { id: 4, href: "#", title: "TV" },
  { id: 5, href: "#", title: "GAMES" },
  { id: 6, href: "#", title: "COLLECTIBLES" },
  { id: 7, href: "#", title: "VIDEOS" },
  { id: 8, href: "#", title: "FANS" },
  { id: 9, href: "#", title: "NEWS" },
  { id: 10, href: "#", title: "SHOP" },
];

const Header = () => {

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
      </nav>

    </header>
  )
}

export default Header
