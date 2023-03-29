import { useState } from "react";
import axios from "axios";

const ChatTextAI = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const HTTP = "http://localhost:8020/";

  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios
      .post(`${HTTP}`, { prompt })
      .then((res) => setResponse(res.data))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div>
        <pre>
          <span>Hi ChaGPT</span>
        </pre>
      </div>

      <div>
        <pre>
          <span>Hello, I can help you!</span>
        </pre>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <textarea
          // onKeyDown={(e) => {
          //   e.keyCode === 13 && e.shiftKey === false && handleSubmit();
          // }}
          cols={1}
          rows={1}
          className="inputChat"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </form>
      <p>{ response ? response : "Preguntame lo que sea" }</p>
      <button></button>
    </div>
  );
};

export default ChatTextAI;
