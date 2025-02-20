import React, { useEffect, useState, createContext } from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

export const UserContext = createContext(null);

const AuthMiddleware = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [user, setUser] = useState("");
  const token = Cookies.get("auth-cookie");

  useEffect(() => {
    const verifyToken = async () => {
      if (token) {
        try {
          const response = await axios.get("/api/v1/admin/verify-token");
          setIsAuthenticated(response.data.isAuthenticated);
          setUser(response.data.name);
        } catch (error) {
          console.error("Token verification failed:", error);
          setIsAuthenticated(false);
        }
      } else {
        setIsAuthenticated(false);
      }
    };

    verifyToken();
  }, [token]);

  if (isAuthenticated === null) {
    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default AuthMiddleware;
