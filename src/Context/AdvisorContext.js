import { createContext, useState } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { useNavigate } from "react-router";

const AdvisorContext = createContext();
export default AdvisorContext;

export const AdvisorProvider = ({ children }) => {
  const navigate = useNavigate();
  
  const contextData = {

  };
  return (
    <AdvisorContext.Provider value={contextData}>{children}</AdvisorContext.Provider>
  );
};