import React, { useRef, useReducer } from "react";
import { useFetch } from "../hooks/useFetch";
import JoditEditor from "jodit-react";
import CrudBtns from "./CrudBtns";
import Fields from "./Fields";
// import parse from "html-react-parser";
import styled from "styled-components";
import ArticlesPreview from "./ArticlePreview";
import { reducer, ACTIONS } from "../hooks/reducer.js";

const Editor = ({}) => {
  const [articleDetails, dispatch] = useReducer(reducer, {
    title: "",
    description: "",
    author: "",
    tags: [],
    HTMLcontent: "",
  });
  const articles = useFetch("/articles", [
    {
      _id: "loading-articles",
      title: "Loading Title...",
      description: "Loading Description...",
    },
  ]);

  const editor = useRef(null);
  // const [content, setContent] = useState("");

  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
  };
  //POST REQUEST
  async function postArticle(e) {
    e.preventDefault();
    await fetch("/articles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(articleDetails),
    });
    dispatch({ type: ACTIONS.CLEAR });
  }
  return (
    <>
      <StyledForm onSubmit={(e) => postArticle(e)}>
        <h1 className="page-header">Blog Editor</h1>
        <JoditEditor
          ref={editor}
          value={articleDetails.HTMLcontent}
          config={config}
          tabIndex={1} // tabIndex of textarea
          // onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
          onBlur={(newContent) =>
            dispatch({ type: ACTIONS.CHANGE_CONTENT, payload: newContent })
          }
          onChange={(newContent) => {}}
        />

        <div>
          <Fields dispatch={dispatch} articleDetails={articleDetails} />
          <CrudBtns articleDetails={articleDetails} />
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
