import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import '../css/App.css'

function Header() {
  return (
    <div className="Header">
        <img src={reactLogo} className="App-logo" alt="logo" />
        <h1>React App</h1>
        <button onClick={() => console.log('Button Clicked')}>Click Me</button>
    </div>
  )
}

export default Header
