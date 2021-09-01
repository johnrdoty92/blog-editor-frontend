import styled from "styled-components";
import React, { useRef, useContext } from "react";
import JoditEditor from "jodit-react";
import Fields from "./Fields";
import { ACTIONS } from "../hooks/reducer";
import { StyledButton } from "./StyledComponents/StyledComponents";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { EditorContext } from "./App";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const ArticleEditor = ({ dispatch, articleDetails }) => {
  const editor = useRef(null);
  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
  };
  const isEditMode = useContext(EditorContext);
  let history = useHistory();

  //POST REQUEST
  async function postArticle(e) {
    e.preventDefault();
    await fetch("/articles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(articleDetails),
    });
    dispatch({ type: ACTIONS.CLEAR });
    history.push("/");
  }
  //PATCH REQUEST
  async function patchArticle(e) {
    e.preventDefault();
    await fetch(`/articles/${articleDetails._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(articleDetails),
    });
    dispatch({ type: ACTIONS.CLEAR });
    history.push("/");
  }

  return (
    <StyledForm
      onSubmit={(e) => {
        isEditMode ? patchArticle(e) : postArticle(e);
      }}
    >
      <Fields dispatch={dispatch} articleDetails={articleDetails} />
      <JoditEditor
        ref={editor}
        value={articleDetails.HTMLcontent}
        config={config}
        tabIndex={1} // tabIndex of textarea
        onBlur={(newContent) =>
          dispatch({ type: ACTIONS.CHANGE_CONTENT, payload: newContent })
        }
        onChange={(newContent) => {}}
      />
      <SubmitButton primary type="submit">
        {isEditMode ? "Update Article" : "Upload Article"}
      </SubmitButton>
    </StyledForm>
  );
};

export default ArticleEditor;

const StyledForm = styled.form`
  display: flex;
  flex-flow: column;
`;

const SubmitButton = styled(StyledButton)`
  font-size: 1.2em;
  padding: 0.5em;
  display: block;
  margin: 1em auto;
`;
