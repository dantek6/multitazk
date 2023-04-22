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
import Quiz from "./components/quiz";

import { Route, Routes } from "react-router-dom";
import JoditEditor from "jodit-react";

// const {Configuration, OpenAIAPI} = require('openai-api');

function App() {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const [chat, setChat] = useState([]);

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
    },
    {
      question: 'What is the largest country in the world?',
      answers: ['Russia', 'USA', 'China', 'India'],
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
        <Route path="/quiz" element={<Quiz questions={questions} />} />
      </Routes>
    </div>
  );
}

export default App;
