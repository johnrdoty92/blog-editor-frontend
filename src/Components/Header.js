import styled from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Header = () => {
  return (
    <>
      <StyledHeader>Blog Editor</StyledHeader>
      <StyledNav>
        <ul>
          <li>
            <Link to="/">Edit Articles</Link>
          </li>
          <li>
            <Link to="/new">New Article</Link>
          </li>
        </ul>
      </StyledNav>
    </>
  );
};

export default Header;

const StyledHeader = styled.h1`
  text-align: center;
  margin: 0;
  padding: 0.5em;
  background: linear-gradient(rgb(37, 176, 169), rgb(87, 196, 189));
  color: white;
`;

const StyledNav = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0.5em;
    background: linear-gradient(
      rgb(25, 164, 157),
      rgb(37, 176, 169),
      rgb(25, 164, 157)
    );

    li {
      list-style-type: none;
      margin: 0 1em;
      a {
        margin: 0.5em;
        padding: 0.25em;
        border-radius: 5px;
        text-transform: uppercase;
        text-decoration: none;
        color: white;
        transition: all 0.25s ease-in-out;

        &:hover {
          background-color: rgb(87, 216, 209);
          color: black;
        }
      }
    }
  }
`;
