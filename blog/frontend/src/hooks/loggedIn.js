import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useState } from "react";

export default function useAuth() {
  const { header } = useContext(AuthContext);
  const [authenticated, setAuthenticated] = useState(false);
  const URL = process.env.BUN_PUBLIC_BACKEND_API_URL;
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const req = await fetch(`${URL}/auth`, {
          headers: { ...header, "Content-Type": "application/json" },
        });
        const result = await req.json();
        if (result.msg === "logged in") setAuthenticated(true);
      } catch (err) {
        console.error(err);
      }
    };
    checkLoginStatus();
  }, []);
  return authenticated;
}
