import styled from "styled-components";
import { ACTIONS } from "../hooks/reducer";

const Fields = ({ dispatch, articleDetails, heading }) => {
  return (
    <StyledFields>
      <h2>{heading}</h2>
      <label>
        Title:
        <input
          type="text"
          required={true}
          value={articleDetails.title}
          onChange={(e) =>
            dispatch({ type: ACTIONS.CHANGE_TITLE, payload: e.target.value })
          }
        ></input>
      </label>
      <label>
        Description:
        <input
          type="text"
          required={true}
          value={articleDetails.description}
          onChange={(e) =>
            dispatch({ type: ACTIONS.CHANGE_DESC, payload: e.target.value })
          }
        ></input>
      </label>
      <label>
        Author:
        <input
          type="text"
          required={true}
          value={articleDetails.author}
          onChange={(e) =>
            dispatch({ type: ACTIONS.CHANGE_AUTHOR, payload: e.target.value })
          }
        ></input>
      </label>
      <label>
        Tags (separate with commas):
        <input
          type="text"
          value={articleDetails.tags}
          onChange={(e) =>
            dispatch({ type: ACTIONS.CHANGE_TAGS, payload: e.target.value })
          }
        ></input>
      </label>
    </StyledFields>
  );
};

export default Fields;

const StyledFields = styled.div`
  margin: 1em 3em;
  display: flex;
  flex-direction: column;
  h2 {
    text-align: center;
  }
  label {
    margin-bottom: 1em;
    width: 100%;
    font-weight: bold;
  }
  input {
    box-sizing: border-box;
    height: 3em;
    width: 100%;
    border-radius: 5px;
    border: 2px solid rgb(25, 164, 157);
    background: rgb(245, 250, 250);
    &:focus {
      background: rgb(230, 245, 245);
      outline: none;
    }
  }
`;
