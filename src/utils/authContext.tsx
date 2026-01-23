"use client";

import { createContext, useContext, useState } from "react";
import type { AuthProps, AuthProviderProps } from "@/types";

const authContext = createContext<AuthProps | null>(null);

export function AuthProvider({ children }: AuthProviderProps) {
  const [role, setRole] = useState("anonymous");

  return (
    <authContext.Provider value={{ role, setRole }}>
      {children}
    </authContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(authContext);
  if (!context) {
    throw new Error("Le auth context doit exister");
  }
  return context;
}
