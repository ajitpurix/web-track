"use client";

import { createContext, ReactNode, useContext } from "react";

const DashboardContext = createContext({});

export const useDashboard = () => useContext(DashboardContext);

export default function DashboardProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <DashboardContext.Provider value={{}}>
      {children}
    </DashboardContext.Provider>
  );
}
