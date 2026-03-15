"use client";

import Header from "@/components/ui/header/Header";
import NavBar from "@/components/ui/navBar/NavBar";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <NavBar />
    </div>
  );
}

export default AppLayout;
