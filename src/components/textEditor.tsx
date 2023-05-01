import ChatTextAI from "./chatTextAI";
import { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";

const TextEditor = () => {
  const editor = useRef(null);
  const [content, setContent] = useState<string>("");

  const handlePromptSubmit = (prompt: string) => {
    setContent(content + " " + prompt);
  };
  return (
    <div>
      <ChatTextAI onPromptSubmit={handlePromptSubmit} />
      <JoditEditor
        ref={editor}
        value={content}
        onBlur={(newContent: string) => setContent(newContent)}
        onChange={(newContent: string) => {}}
      />
      {/* <p>{chatResponse}</p> */}
    </div>
  );
};

export default TextEditor;
