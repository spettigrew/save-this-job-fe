import React, { useContext } from "react";

const OktaContext = React.createContext({});

export const useOktaAuth = () => {
  return { isAuthenticated: true };
};
