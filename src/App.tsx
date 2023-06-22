import Header from "./components/header";
import CardSlider from "./components/cardSlider";
import Calendar from "./components/calendar";
import DoughnutChart from "./components/doughnutChart";
// import Avances from "./components/estadisticasPrincipal";
import TextEditor from "./components/textEditor";
import EstadisticasPrincipal from "./components/estadisticasPrincipal";

import Login from "./pages/loginPage";
import Register from "./pages/registerPage";
import Group from "./pages/groupPage";
import ProtectedRoute from "./pages/protectedRoute";

import { Route, Routes } from "react-router-dom";
//import store from "./app/store";

// import { useSelector } from "react-redux";
// import type { RootState } from "./app/store";
// const {Configuration, OpenAIAPI} = require('openai-api');

function App() {
  //Store de Redux:
  // const taskState = useSelector((state: RootState) => state.tasks);

  const questions = [
    {
      question: "What is the capital of France?",
      answers: ["Paris", "Rome", "Madrid", "Berlin"],
      correctAnswer: 0,
    },
    {
      question: "What is the largest country in the world?",
      answers: ["Russia", "USA", "China", "India"],
      correctAnswer: 0,
    },
    // más preguntas
  ];

  const Home = () => {
    return (
      <div>
        <Header />
        <CardSlider />
        <div style={{ marginTop: 40, marginLeft: 200 }}>
          <Calendar />
          {/* <DoughnutChart data={userData} /> */}
          <DoughnutChart />
          <EstadisticasPrincipal />
        </div>
        {/* <TaskForm /> */}
      </div>
    );
  };

  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<ProtectedRoute/>}>
          <Route path="/" element={<Home />} />
          <Route path="/groups" element={<Group />} />
          <Route path="/text-editor" element={<TextEditor />} />
        </Route>
        {/* <Route path="/quiz" element={<Quiz questions={questions} />} /> */}
      </Routes>
    </div>
  );
}

export default App;
