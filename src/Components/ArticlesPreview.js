import styled from "styled-components";
import { StyledButton, Heading } from "./StyledComponents/StyledComponents";
import React, { useState, useEffect } from "react";
import { ACTIONS } from "../hooks/reducer";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useFetch } from "../hooks/useFetch";

const ArticlesPreview = ({ dispatch }) => {
  //Fetch all articles and rerender anytime an article is deleted
  const articles = useFetch("/articles");
  const [articlesArray, setArticlesArray] = useState(articles);
  useEffect(() => {
    setArticlesArray(articles);
  }, [articles, articlesArray]);

  let history = useHistory();

  const articleList = articlesArray.map((article, index) => {
    return (
      <StyledPreview key={article._id}>
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        <p className="date">{article.date?.slice(0, 10)}</p>
        <EditButton
          primary
          onClick={() => {
            dispatch({ type: ACTIONS.EDIT, payload: article });
            history.push(`/edit/${article._id}`);
          }}
        >
          Edit
        </EditButton>
        <DeleteButton
          onClick={() => {
            fetch(`/articles/${article._id}`, {
              method: "DELETE",
              headers: { "Content-Type": "application/json" },
            });
            setArticlesArray(articlesArray.splice(index, 1));
          }}
        >
          Delete
        </DeleteButton>
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
  p.date {
    color: grey;
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
