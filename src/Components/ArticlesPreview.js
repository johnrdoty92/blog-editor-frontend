import styled from "styled-components";
import {
  StyledButton,
  Heading,
  Container,
} from "./StyledComponents/StyledComponents";
import React, { useState, useEffect } from "react";
import { ACTIONS } from "../hooks/reducer";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useFetchGet } from "../hooks/useFetchGet";

const ArticlesPreview = ({ dispatch, setModalIsOpen, setFetchResponse }) => {
  //Fetch all articles and rerender anytime an article is deleted
  const articles = useFetchGet("/articles");
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
          disabled={article._id === "error"}
          onClick={() => {
            dispatch({ type: ACTIONS.EDIT, payload: article });
            history.push(`/edit/${article._id}`);
          }}
        >
          Edit
        </EditButton>
        <DeleteButton
          disabled={article._id === "error"}
          onClick={() => {
            fetch(`/articles/${article._id}`, {
              method: "DELETE",
              headers: { "Content-Type": "application/json" },
            })
              .then((response) => response.json())
              .then((data) => setFetchResponse(data))
              .catch((err) =>
                setFetchResponse({ title: err.name, message: err.message })
              );
            setModalIsOpen(true);
            setArticlesArray(articlesArray.splice(index, 1));
          }}
        >
          Delete
        </DeleteButton>
      </StyledPreview>
    );
  });

  return (
    <Container>
      <Heading>All Articles</Heading>
      {articleList}
    </Container>
  );
};

export default ArticlesPreview;

const StyledPreview = styled.div`
  display: flex;
  gap: 1em;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.2);
  margin: 1em auto;
  max-width: 60em;
  padding: 1em;
  transition: transform 0.25s ease;
  &:hover {
    transform: translateY(-4px);
  }
  h3 {
    line-height: 2em;
  }
  h3,
  p {
    margin: 0 auto;
    overflow: hidden;
    white-space: nowrap;
    word-wrap: normal;
    text-overflow: ellipsis;
    flex-basis: 25%;
  }
  p {
    align-self: center;
    text-align: center;
  }
  p.date {
    color: grey;
  }
  @media (max-width: 667px) {
    flex-wrap: wrap;
    h3 {
      flex: 1 1 100%;
      text-align: center;
    }
    p {
      white-space: initial;
      flex: 1 1 100%;
    }
    button {
      margin: 0 auto;
      max-width: 75%;
      flex: 1 1 100%;
    }
  }
`;

const EditButton = styled(StyledButton)`
  min-width: 5em;
  height: 3em;
  margin: 0;
  margin-left: auto;
  align-self: center;
  &:disabled {
    background: rgb(200, 200, 200);
    cursor: default;
    &:hover {
      color: white;
    }
  }
`;

const DeleteButton = styled(StyledButton)`
  min-width: 5em;
  height: 3em;
  margin: 0em;
  align-self: center;
  &:disabled {
    background: rgb(200, 200, 200);
    cursor: default;
    &:hover {
      color: white;
    }
  }
`;
