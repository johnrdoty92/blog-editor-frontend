import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import parse from "html-react-parser";

const submitContent = (content) => {
  console.log(JSON.stringify({ content: content }));
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content: content }),
  };
  fetch("/", requestOptions).then((response) => response.json());
};

const Jodit = ({}) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
  };

  return (
    <>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        tabIndex={1} // tabIndex of textarea
        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={(newContent) => {}}
      />
      <button type="button" onClick={() => submitContent(content)}>
        Submit Content
      </button>
      <h1>Current Content:</h1>
      <div>{parse(content)}</div>
    </>
  );
};

export default Jodit;
