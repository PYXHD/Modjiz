"use client";

import Header from "@/components/ui/header/Header";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />

      <main>{children}</main>
    </div>
  );
}

export default AppLayout;
