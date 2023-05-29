import ChatTextAI from "./chatTextAI";
import { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";

import { Ring } from '@uiball/loaders'

const TextEditor = () => {
  const editor = useRef(null);
  const [content, setContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handlePromptSubmit = (prompt: string) => {
    setContent(content + " " + prompt);
  };
  return (
    <div>
      <ChatTextAI onPromptSubmit={handlePromptSubmit} setIsLoading={setIsLoading} />
      <div aria-live="polite" aria-busy={isLoading}>
        {isLoading && <Ring />}
        {!isLoading && 
          <JoditEditor
            ref={editor}
            value={content}
            onBlur={(newContent: string) => setContent(newContent)}
            onChange={(newContent: string) => {}}
          />
        }
      </div>
      {/* <p>{chatResponse}</p> */}
    </div>
  );
};

export default TextEditor;
