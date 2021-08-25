import React, { useState, useRef } from "react";
import { submitContent } from "../controllers/articles";
import JoditEditor from "jodit-react";
import CRUDbtns from "./CRUDbtns";
import Fields from "./Fields";
import parse from "html-react-parser";
import styled from "styled-components";
import ArticlePreview from "./ArticlePreview";

const Editor = ({}) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState([]);

  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
  };

  return (
    <>
      <StyledForm>
        <h1 className="page-header">Blog Editor</h1>
        <JoditEditor
          ref={editor}
          value={content}
          config={config}
          tabIndex={1} // tabIndex of textarea
          onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
          onChange={(newContent) => {}}
        />

        <div>
          <Fields/>
          <CRUDbtns/>
        </div>
        
      </StyledForm>
      <h1>Current Content:</h1>
      <ArticlePreview/>
    </>
  );
};

export default Editor;

const StyledForm = styled.form`
  h1.page-header {
    text-align: center;
    margin: 0;
    padding: 0.5em;
    background-color: rgb(37, 176, 169);
    color: white;
  }

`;
