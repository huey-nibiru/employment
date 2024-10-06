import { useEffect, useState, useCallback } from "react";
import { createContext } from "react";
import { supabase } from "../client";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [userID, setUserID] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event, session) => {
      if (session) {
        if (event === "INITIAL_SESSION") {
          setIsAuthenticated(true);
          setUserID(session.user["id"]);
        }
        if (event === "SIGNED_OUT") {
          setIsAuthenticated(false);
          setUserID(null);
        }
        if (event === "SIGNED_IN") {
          setIsAuthenticated(true);
          setUserID(session.user["id"]);
        }
      }
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        userID,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
