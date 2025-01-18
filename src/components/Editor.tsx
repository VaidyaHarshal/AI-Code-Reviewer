import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

const Editor = ({
  isGenerating,
  onGenerateReview,
}: {
  isGenerating: boolean;
  onGenerateReview(code: string): void;
}) => {
  const [code, setCode] = useState("");
  return (
    <div className="h-full w-6/12 relative">
      <button
        onClick={() => onGenerateReview(code)}
        className="button"
        disabled={isGenerating}
      >
        Generate Review
      </button>
      <CodeMirror
        minHeight="100vh"
        value={code}
        onChange={setCode}
        theme="dark"
        extensions={[javascript({ jsx: true })]}
        style={{ fontSize: "20px" }}
      />
    </div>
  );
};

export default Editor;
