import { Link } from "react-router-dom";
import styled from "styled-components";
const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 50vw;
  list-style-type: none;

  li a {
    text-decoration: none;
    color: inherit;
    padding: 0.25rem 0.5rem;
  }

  li a:focus {
    outline: 2px solid #0b69ff;
    outline-offset: 2px;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
`;

export default function Navbar() {
  return (
    <Nav aria-label="Main navigation">
      <Ul>
        <li>
          <Link to={"/"}>home</Link>
        </li>
        <li>
          <Link to={"posts"}>blog</Link>
        </li>
        <li>
          <Link to={"about"}>about</Link>
        </li>
      </Ul>
    </Nav>
  );
}
