import styled from "styled-components";
import { usePost } from "../hooks/usePost";

const CRUDbtns = () => {
  return (
    <ButtonsWrapper>
      <button className="crud get-all-articles" type="button">
        Get All Articles
      </button>
      <button className="crud" type="submit">
        Submit Content
      </button>
    </ButtonsWrapper>
  );
};

export default CRUDbtns;

const ButtonsWrapper = styled.div`
  display: flex;

  button.crud {
    font-size: large;
    padding: 0.5em;
    display: block;
    margin: auto;
    outline: none;
    border: none;
    color: white;
    border-radius: 25px;

    &[type="submit"] {
      background-color: rgb(37, 176, 169);
      &:hover {
        background-color: rgb(87, 226, 219);
      }
      &:active {
        background-color: rgb(7, 126, 139);
      }
    }
    &.get-all-articles {
      background-color: rgb(40, 40, 150);
      &:hover {
        background-color: rgb(90, 90, 200);
      }
      &:active {
        background-color: rgb(10, 10, 120);
      }
    }
  }
`;
