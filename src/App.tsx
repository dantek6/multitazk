import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/header'
import CardSlider from './components/cardSlider'
import Calendar from './components/calendar'
import {UserData} from './data'
import PieChart from './components/PieChart'

function App() {
  const [userData, setUserData] = useState({
    labels: ['Completed', 'Remaining'],
    datasets: [
      {
        label: 'Tasks',
        data: [UserData.CompletedTasks, UserData.TotalTasks - UserData.CompletedTasks],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  })

  return (
    <div className="App">
      <Header />
      <CardSlider />
      <Calendar />
      <PieChart data={userData} />
    </div>
  )
}

export default App
