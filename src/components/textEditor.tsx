import ChatTextAI from "./chatTextAI";
import {useState, useRef} from "react";
import JoditEditor from "jodit-react";

const TextEditor = () => {
    const editor = useRef(null);
    const [content, setContent] = useState("");

    const [chat, setChat] = useState([]);

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

export default TextEditor;