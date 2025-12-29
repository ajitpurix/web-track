import { ReactNode } from "react";

import DashboardProvider from "./provider";
import Sidebar from "./components/sidebar";
import TopBar from "./components/Topbar";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <DashboardProvider>
      <div className="flex min-h-screen bg-background-light dark:bg-background-dark font-display">
        <Sidebar />

        <div className="flex flex-1 flex-col">
          <TopBar />
          <main className="flex-1 p-8">{children}</main>
        </div>
      </div>
    </DashboardProvider>
  );
}
