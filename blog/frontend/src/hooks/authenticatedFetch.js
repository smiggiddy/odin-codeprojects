import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

export default function useAuthenticateRequest() {
  const auth = useContext(AuthContext);

  const authenticatedFetch = async (url, options = {}) => {
    return fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.token}`,
        ...options.headers,
      },
    });
  };

  return { authenticatedFetch };
}
