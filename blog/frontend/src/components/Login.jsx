import styled from "styled-components";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const P = styled.p`
  color: red;
`;

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await fetch("http://localhost:3001/auth/token", {
      mode: "cors",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username, password: password }),
    });

    const adminToken = await token.json();
    if (adminToken.token) {
      localStorage.setItem("jwt_token", adminToken.token);
      navigate("/admin");
    } else {
      setErr(adminToken.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormDiv>
        <label htmlFor="username">Username</label>
        <input
          name="username"
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </FormDiv>
      <FormDiv>
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </FormDiv>
      {err && <P>{err}</P>}
      <button type="submit">Login</button>
    </form>
  );
}
