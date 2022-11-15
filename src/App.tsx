import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/header'
import CardSlider from './components/cardSlider'
import Calendar from './components/calendar'

function App() {
  return (
    <div className="App">
      <Header />
      <CardSlider />
      <Calendar />
    </div>
  )
}

export default App
