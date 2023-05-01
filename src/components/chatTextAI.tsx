import { useState, FC } from "react";
import axios from "axios";

interface ChatTextAIProps {
  onPromptSubmit: (prompt: string) => void;
}

const ChatTextAI: FC<ChatTextAIProps> = ({ onPromptSubmit }) => {
  const [prompt, setPrompt] = useState<string>("");
  const [response, setResponse] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/chat", { prompt })
      .then((res) => {
        const responseData: string = res.data;
        setResponse(responseData);
        onPromptSubmit(responseData); // Llamada a la función de devolución de llamada
      })
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
        <button style={{ background: "blue" }} type="submit">
          Submit
        </button>
      </form>
      {/* <p>{response}</p> */}
    </div>
  );
};

export default ChatTextAI;
