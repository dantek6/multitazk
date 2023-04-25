import { useState, useRef, useMemo } from "react";
import reactLogo from "./assets/react.svg";
import Header from "./components/header";
import CardSlider from "./components/cardSlider";
import Calendar from "./components/calendar";
import { UserData } from "./data";
import DoughnutChart from "./components/doughnutChart";
import Avances from "./components/avances";
import ChatTextAI from "./components/chatTextAI";
import Login from "./components/login";
import Register from "./components/register";
import store from "./app/store";
import { Route, Routes } from "react-router-dom";
import JoditEditor from "jodit-react";

import { useSelector } from "react-redux";
import type { RootState } from "./app/store";
// const {Configuration, OpenAIAPI} = require('openai-api');

function App() {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const [chat, setChat] = useState([]);

  //Store de Redux:
  const taskState = useSelector((state: RootState) => state.tasks);
  //console.log(taskState);

  const [userData, setUserData] = useState({
    labels: ["Completado", "Faltante"],
    datasets: [
      {
        label: "Tasks",
        data: [
          UserData.CompletedTasks,
          UserData.TotalTasks - UserData.CompletedTasks,
        ],
        backgroundColor: ["#D1261F", "#145285"],
        hoverBackgroundColor: ["#D1261F", "#145285"],
      },
    ],
  });

  const questions = [
    {
      question: 'What is the capital of France?',
      answers: ['Paris', 'Rome', 'Madrid', 'Berlin'],
      correctAnswer: 0,
    },
    {
      question: 'What is the largest country in the world?',
      answers: ['Russia', 'USA', 'China', 'India'],
      correctAnswer: 0,
    },
    // más preguntas
  ];

  const Home = () => {
    return (
      <div>
        <div className="col1">
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
    );
  };

  const TextEditor = () => {
    return (
      <div>
        <ChatTextAI />
        <JoditEditor
          ref={editor}
          value={content}
          onBlur={(newContent) => setContent(newContent)}
          onChange={(newContent) => {}}
        />
        {content}
      </div>
    );
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/text-editor" element={<TextEditor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/quiz" element={<Quiz questions={questions} />} /> */}
      </Routes>
    </div>
  );
}

export default App;
