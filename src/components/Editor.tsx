import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { EditorView } from "@codemirror/view"; // Import EditorView for line wrapping

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
        extensions={[
          javascript({ jsx: true }),
          EditorView.lineWrapping, // Enable line wrapping
        ]}
        style={{
          fontSize: "16px",
          overflow: "auto",
          height: "100%",
        }}
      />
    </div>
  );
};

export default Editor;
