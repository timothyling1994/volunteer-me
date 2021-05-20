import React, { useEffect, useState } from "react";
import app from "./firebase.js";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
    	console.log("auth state changed");
      console.log(user);
      setCurrentUser(user);

    });
  }, []);

  return (
    <AuthContext.Provider value={{currentUser,}}>
      {children}
    </AuthContext.Provider>
  );
};
