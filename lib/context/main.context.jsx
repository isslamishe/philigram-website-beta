"use client";

import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export function UserProvider({ initialLanguage, children }) {
  const [currentNav, setCurrentNav] = useState("Accueil");
  const [isOpen, setIsOpen] = useState(false);
  const [currentSubNav, setCurrentSubNav] = useState("");
  const [language, setLanguage] = useState(initialLanguage);
  const [isAppLoading, setIsAppLoading] = useState(true);
  useEffect(() => {
    window.localStorage.setItem("language", language);
  }, [language]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

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
        isAppLoading,
        setIsAppLoading,
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
