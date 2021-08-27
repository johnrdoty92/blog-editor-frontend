import React, { useState, useRef, useReducer } from "react";
import { useFetch } from "../hooks/useFetch";
import { usePost } from "../hooks/usePost";
import JoditEditor from "jodit-react";
import CRUDbtns from "./CRUDbtns";
import Fields from "./Fields";
// import parse from "html-react-parser";
import styled from "styled-components";
import ArticlesPreview from "./ArticlePreview";
import { reducer } from "../hooks/reducer.js";

const Editor = ({}) => {
  const [articleDetails, dispatch] = useReducer(reducer, {});
  const articles = useFetch("/articles", [{}]);

  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
  };
  //POST REQUEST
  function postArticle(e) {
    e.preventDefault();
    fetch("/articles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...articleDetails, HTMLcontent: content }),
    });
    //Need to reset all fields and update the articles when this happens
  }
  return (
    <>
      <StyledForm onSubmit={(e) => postArticle(e)}>
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
          <Fields dispatch={dispatch} articleDetails={articleDetails}/>
          <CRUDbtns articleDetails={articleDetails} />
        </div>
      </StyledForm>
      <ArticlesPreview dispatch={dispatch} articles={articles} />

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
