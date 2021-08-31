import styled from "styled-components";
import { ACTIONS } from "../hooks/reducer";

const Fields = ({ dispatch, articleDetails }) => {
  return (
    <StyledFields>
    <h2>Create a New Article:</h2>
      <label>
        Title:
        <input
          type="text"
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
  }
  input {
    box-sizing: border-box;
    width: 100%;
  }
`;
