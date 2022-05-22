import React from "react";
import { createContext, useState } from "react";

const StyleContext = createContext();
export default StyleContext;

export const StyleProvider = ({ children }) => {
  const [active, setActive] = useState("Home");

  const activeNav = (e) => {
    setActive(e);
  };

  const contextData = {
    activeNav,
  };

  return (
    <StyleContext.Provider value={contextData}>
      {children}
    </StyleContext.Provider>
  );
};
