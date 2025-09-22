import { createContext } from "react";

export const AuthContext = createContext({
  token: localStorage.getItem("jwt_token") || "",
  header: { Authorization: `Bearer ${localStorage.getItem("jwt_token")}` },
});
