import styled from "styled-components";

const ArticlePreview = ({article}) => {
  return (
    <StyledPreview>
      <h3>{article.title}</h3>
      <p>{article.description}</p>
      <button onClick={() => {console.log(article._id)}}className="edit">Edit</button>
      <button className="delete">Delete</button>
    </StyledPreview>
  );
};

export default ArticlePreview;

const StyledPreview = styled.div`
  display: flex;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.2);
  margin: 1em;
  h3 {
    margin: 1em;
  }
  p {
    margin: 1em;
    align-self: center;
  }
  button {
    margin: 0.5em;
    border: 1px solid black;
    border-radius: 25px;
    width: 5em;

    &.edit {
      margin-left: auto;
      background-color: turquoise;
    }
    &.delete {
      background-color: red;
    }
    &:hover {
      background: grey;
      color: white;
    }
    &:active {
      background: black;
      color: white;
    }
  }
`;
