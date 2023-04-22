import { useState } from "react";
import axios from "axios";

const ChatTextAI = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const HTTP = "http://localhost:8080/";

  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/chat", { prompt })
      .then((res) => setResponse(res.data))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>

        <input 
          type="text" 
          value={prompt} 
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button 
          style={{background: "blue"}} 
          type="submit">Submit</button>
      </form>
      <p>{ response }</p>
    </div>
  );
};

export default ChatTextAI;
