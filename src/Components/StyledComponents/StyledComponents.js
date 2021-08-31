import styled from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const primary = "rgb(25, 164, 157)";
const primaryHighlight = "rgb(87, 216, 209)";
const danger = "rgb(200, 50, 50)";
const dangerHighlight = "rgb(255, 120, 120)";

export const StyledButton = styled.button`
  text-transform: uppercase;
  padding: 0.5em;
  border: none;
  color: white;
  border-radius: 5px;
  transition: all 0.25s ease-in-out;
  background: ${(props) => (props.primary ? primary : danger)};

  &:hover {
    background: ${(props) =>
      props.primary ? primaryHighlight : dangerHighlight};
    color: black;
    cursor: pointer;
  }
  &:active {
    background-color: grey;
    color: black;
  }
`;

export const StyledLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  padding: 0.5em;
  border: none;
  color: white;
  border-radius: 5px;
  transition: all 0.25s ease-in-out;
  background: ${(props) => (props.primary ? primary : danger)};

  &:hover {
    background: ${(props) =>
      props.primary ? primaryHighlight : dangerHighlight};
    color: black;
    cursor: pointer;
  }
  &:active {
    background-color: grey;
    color: black;
  }
`;

export const Heading = styled.h2`
  text-align: center;
`;
