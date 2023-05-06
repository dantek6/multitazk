import { useState } from 'react'
import reactLogo from '../assets/react.svg'

function Header() {
  return (
    <div>
      <header>
        <nav className="nav">
          <div className="nav__container">
            <a href="/" className="nav__item">Inicio</a>
            <a href="/groups" className="nav__item">Grupos</a>
            <a href="/quiz" className="nav__item">Avance Personal</a>
            <a href="/login" className="nav__item">Logo</a>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header
