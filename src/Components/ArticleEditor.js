import styled from "styled-components";
import React, { useRef } from "react";
import JoditEditor from "jodit-react";
import Fields from "./Fields";
import { ACTIONS } from "../hooks/reducer";
import { StyledButton } from "./StyledComponents/StyledComponents";

const ArticleEditor = ({ dispatch, articleDetails, submitButtonText }) => {
  const editor = useRef(null);
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
    <StyledForm onSubmit={(e) => postArticle(e)}>
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
        {submitButtonText}
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
