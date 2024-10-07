import React from "react";

const MarkdownEditor = (props) => {

  function onChangeMarkdownText(e) {
    props.settingMarkdown(e.target.value);
  }
  
  return (
    <div className="editor-container">
      <textarea
        className="editor-textarea"
        onChange={onChangeMarkdownText}
      />
    </div>
  );
};

export default MarkdownEditor;
