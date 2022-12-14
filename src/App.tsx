import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/header'
import CardSlider from './components/cardSlider'
import Calendar from './components/calendar'
import { UserData } from './data'
import DoughnutChart from './components/doughnutChart'
import Avances from './components/avances'

function App() {
  const [userData, setUserData] = useState({
    labels: ['Completado', 'Faltante'],
    datasets: [
      {
        label: 'Tasks',
        data: [UserData.CompletedTasks, UserData.TotalTasks - UserData.CompletedTasks],
        backgroundColor: ['#D1261F', '#145285'],
        hoverBackgroundColor: ['#D1261F', '#145285'],
      },
    ],
  })

  return (
    <div className="App">
      <Header />
      <div className='col1'>
        <div className="box1">
          <CardSlider />
        </div>
        <div className="box2">
          <Calendar />
          <DoughnutChart data={userData} />
        </div>
      </div>
      <div className="col2">
        <Avances />
      </div>
    </div>
  )
}

export default App
