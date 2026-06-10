"use client";

import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [name, setName] = useState("Guest");
  const [currentNav, setCurrentNav] = useState("Guest");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <UserContext.Provider
      value={{ currentNav, setCurrentNav, isOpen, setIsOpen }}
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
