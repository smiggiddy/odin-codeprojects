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
          <a href="#missions">missions</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
        <li>
          <a href="#fun">fun</a>
        </li>
      </Ul>
    </Nav>
  );
}
