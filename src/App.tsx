import { useState, useRef, useMemo } from "react";
import reactLogo from "./assets/react.svg";
import Header from "./components/header";
import CardSlider from "./components/cardSlider";
import Calendar from "./components/calendar";
import { UserData } from "./data";
import DoughnutChart from "./components/doughnutChart";
import Avances from "./components/avances";

import { Route, Routes } from "react-router-dom";
import JoditEditor from "jodit-react";

function App() {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  
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
        <JoditEditor
          ref={editor}
          value={content}
          onBlur={newContent => setContent(newContent)}
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
      </Routes>
    </div>
  );
}

export default App;
