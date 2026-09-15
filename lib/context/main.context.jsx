"use client";

import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [currentNav, setCurrentNav] = useState("Accueil");
  const [isOpen, setIsOpen] = useState(false);
  const [currentSubNav, setCurrentSubNav] = useState("");
  const [language, setLanguage] = useState("fr");

  useEffect(() => {
    const storedLang = localStorage.getItem("language");

    if (storedLang) {
      setLanguage(storedLang);
    } else {
      localStorage.setItem("language", "fr");
      setLanguage("fr");
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        language,
        setLanguage,
        currentNav,
        setCurrentNav,
        isOpen,
        setIsOpen,
        currentSubNav,
        setCurrentSubNav,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useMainContext() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used inside UserProvider");
  }

  return context;
}
