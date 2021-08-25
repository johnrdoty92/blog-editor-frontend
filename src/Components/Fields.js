import styled from "styled-components";

const Fields = () => {
  return (
    <StyledFields>
      <label>
        Title:
        <input
          type="text"
        //   value={title}
        //   onChange={(e) => setTitle(e.target.value)}
        ></input>
      </label>
      <label>
        Description:
        <input
          type="text"
        //   value={description}
        //   onChange={(e) => setDescription(e.target.value)}
        ></input>
      </label>
      <label>
        Author:
        <input
          type="text"
        //   value={author}
        //   onChange={(e) => setAuthor(e.target.value)}
        ></input>
      </label>
      <label>
        Tags (separate with commas):
        <input
          type="text"
        //   value={tags}
        //   onChange={(e) => setTags(e.target.value)}
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

  label {
    margin-bottom: 1em;
    width: 100%;
  }
  input {
    box-sizing: border-box;
    width: 100%;
  }
`;
