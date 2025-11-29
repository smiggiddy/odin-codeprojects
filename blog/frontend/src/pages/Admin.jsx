import { useContext, useState } from "react";
import { Outlet, useNavigate, Link } from "react-router-dom";
import useBlogPosts from "../hooks/posts.js";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Nav = styled.div`
  flex: 1;
  max-width: 350px;
`;

const AdminLayout = (props) => {
  return (
    <Container>
      <Nav>
        <h1> Admin Area </h1>
        {props.navbar}
      </Nav>
      <main>
        <Outlet />
      </main>
    </Container>
  );
};

const AdminLink = ({ name, path }) => {
  return (
    <li>
      <Link to={path}>{name}</Link>
    </li>
  );
};

const AdminNavBar = () => {
  return (
    <>
      <ul>
        <AdminLink name={"Create Post"} path={"new"} />
        <AdminLink name={"View Post"} path={"posts"} />
        <li>Logout</li>
      </ul>
    </>
  );
};

export default function Admin() {
  const navigate = useNavigate();

  function logOut() {
    localStorage.removeItem("jwt_token");
    return navigate("/");
  }

  return <AdminLayout navbar={AdminNavBar()} />;
}
