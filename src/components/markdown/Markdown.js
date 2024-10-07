import React, { useState, useEffect } from "react";
import MarkdownEditor from "../editor/MarkdownEditor";
import MarkdownPreview from "../preview/MarkdownPreview";
import MarkdownHead from "../header/MarkdownHead";
import "./Markdown.css";

const Markdown = () => {
  const [markdownText, setMarkdownText] = useState("");
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (hasChanges) {
        e.preventDefault();
        e.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };

  }, [hasChanges]);

  function settingMarkdown(text) {
    setMarkdownText(text);
    setHasChanges(true);
  }

  return (
    <div className="markdown-container">
      <div className="markdown-head">
        <MarkdownHead textData={markdownText} setHasChanges={setHasChanges}/>
      </div>
      <div className="markdown-body">
      <div className="editor">
        <div className="head">
          <p>MARKDOWN</p>
        </div>
        <MarkdownEditor settingMarkdown={settingMarkdown}/>
      </div>
      <div className="preview-text">
        <div className="head">
          <p>PREVIEW</p>
        </div>
        <MarkdownPreview inputText={markdownText}/>
      </div>
      </div>
    </div>
  );
};

export default Markdown;
