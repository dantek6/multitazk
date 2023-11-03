// import ChatTextAI from "./chatTextAI";
import { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";

// import { Ring } from '@uiball/loaders'
// import Header from "./header";

const TextEditor = () => {
  const editor = useRef(null);
  const [content, setContent] = useState<string>("");
  // const [isLoading, setIsLoading] = useState<boolean>(false);

  // const handlePromptSubmit = (prompt: string) => {
  //   setContent(content + " " + prompt);
  // };
  return (
    <div>
      <div aria-live="polite">
        <JoditEditor
          ref={editor}
          value={content}
          // onBlur={(newContent: string) => setContent(newContent)}
        // onChange={(newContent: string) => {}}
        />

      </div>

    </div>
  );
};

export default TextEditor;
