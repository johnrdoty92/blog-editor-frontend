import React, { useState, useRef } from "react";
import { submitContent } from "../controllers/requestsAPI";
import JoditEditor from "jodit-react";
// import parse from "html-react-parser";

const Jodit = ({}) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
  };

  return (
    <>
      <label>
        Title:
        <input type="text"></input>
      </label>
      <label>
        Description:
        <input type="text"></input>
      </label>
      <label>
        Author:
        <input type="text"></input>
      </label>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        tabIndex={1} // tabIndex of textarea
        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={(newContent) => {}}
      />
      <label>
        Tags (separate with commas):
        <input type="text"></input>
      </label>
      <button type="button" onClick={() => submitContent(content)}>
        Submit Content
      </button>
      <h1>Current Content:</h1>
      {/* <div>{parse(content)}</div> */}
    </>
  );
};

export default Jodit;
