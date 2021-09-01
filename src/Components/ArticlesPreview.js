import styled from "styled-components";
import { StyledButton, Heading } from "./StyledComponents/StyledComponents";
import React from "react";
import { ACTIONS } from "../hooks/reducer";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const ArticlesPreview = ({ articles, dispatch, setIsEditMode }) => {
  let history = useHistory();
  const articleList = articles.map((article) => {
    return (
      <StyledPreview key={article._id}>
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        <EditButton
          primary
          onClick={() => {
            dispatch({ type: ACTIONS.EDIT, payload: article });
            setIsEditMode(true);
            history.push(`/edit/${article._id}`);
          }}
        >
          Edit
        </EditButton>
        <DeleteButton className="delete">Delete</DeleteButton>
      </StyledPreview>
    );
  });
  return (
    <div>
      <Heading>All Articles</Heading>
      {articleList}
    </div>
  );
};

export default ArticlesPreview;

const StyledPreview = styled.div`
  display: flex;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.2);
  margin: 1em auto;
  max-width: 75%;
  h3 {
    margin: 1em;
  }
  p {
    margin: 1em;
    align-self: center;
  }
`;

const EditButton = styled(StyledButton)`
  width: 5em;
  height: 3em;
  margin: 0.5em;
  align-self: center;
  margin-left: auto;
`;

const DeleteButton = styled(StyledButton)`
  width: 5em;
  height: 3em;
  margin: 0.5em;
  margin-right: 1em;
  align-self: center;
`;
