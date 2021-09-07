import React, { useRef, useEffect } from "react";
import { ACTIONS } from "../hooks/reducer";
import styled from "styled-components";
import { StyledButton } from "./StyledComponents/StyledComponents";
import Fields from "./Fields";
import JoditEditor from "jodit-react";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";

const ArticleEditor = ({
  dispatch,
  articleDetails,
  setFetchResponse,
  setModalIsOpen,
}) => {
  //Jodit Configuration
  const editor = useRef(null);
  const config = {
    readonly: false,
  };
  //Router Hooks
  let history = useHistory();
  let location = useLocation();
  //Set editing mode to updating or creating and article
  const editingMode =
    location.pathname === "/new"
      ? {
          heading: "Create Article",
          method: "POST",
          buttonText: "Upload",
        }
      : { heading: "Edit Article", method: "PATCH", buttonText: "Update" };
  //Clear all fields if trying to create a new article
  useEffect(() => {
    if (location.pathname === "/new") {
      dispatch({ type: ACTIONS.CLEAR });
    }
  }, [dispatch, location]);

  async function uploadArticle(method) {
    try {
      articleDetails.tags = articleDetails.tags.split(",");
      const response = await fetch(
        `/articles/${method === "PATCH" ? articleDetails._id : ""}`,
        {
          method: method,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(articleDetails),
        }
      );
      const jsonResponse = await response.json();
      setFetchResponse({
        title: jsonResponse?.title,
        message: jsonResponse?.message,
      });
      setModalIsOpen(true);
      dispatch({ type: ACTIONS.CLEAR });
      history.push("/");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <StyledForm
      onSubmit={(e) => {
        e.preventDefault();
        uploadArticle(editingMode.method);
      }}
    >
      <Fields
        dispatch={dispatch}
        articleDetails={articleDetails}
        heading={editingMode.heading}
      />
      <JoditEditor
        ref={editor}
        value={articleDetails.HTMLcontent}
        config={config}
        tabIndex={1} // tabIndex of textarea
        onBlur={(newContent) =>
          dispatch({ type: ACTIONS.CHANGE_CONTENT, payload: newContent })
        }
      />
      <SubmitButton primary type="submit">
        {editingMode.buttonText}
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
