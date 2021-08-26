import React, { useState, useRef, useReducer } from "react";
import { useFetch } from "../hooks/useFetch";
import { usePost } from "../hooks/usePost";
import JoditEditor from "jodit-react";
import CRUDbtns from "./CRUDbtns";
import Fields from "./Fields";
// import parse from "html-react-parser";
import styled from "styled-components";
import ArticlePreview from "./ArticlePreview";
import { reducer } from "../hooks/reducer.js";

const Editor = ({}) => {
  const [articleDetails, dispatch] = useReducer(reducer, {});
  const articles = useFetch("/articles", [{}]);
  const articleList = articles.map((article) => {
    return <ArticlePreview key={article._id} article={article} />;
  });

  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
  };
  function postArticle(e) {
    e.preventDefault();
    fetch("/articles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...articleDetails, HTMLcontent: content }),
    });
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
          <Fields dispatch={dispatch} />
          <CRUDbtns articleDetails={articleDetails} />
        </div>
      </StyledForm>
      <h1>Current Content:</h1>
      {articleList}
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
