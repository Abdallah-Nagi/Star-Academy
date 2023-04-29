import React, { useState, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [userAuth, loadingAuth, error] = useAuthState(auth);
  return (
    <AppContext.Provider value={{ userAuth, loadingAuth }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
