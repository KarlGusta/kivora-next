"use client";

import { createContext, useContext } from "react";

export const AppShellContext = createContext(null);

export const useAppShell = () => {
  const context = useContext(AppShellContext);

  if (!context) {
    throw new Error("useAppShell must be used within the dashboard layout.");
  }

  return context;
};
