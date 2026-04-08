import Header from "@/components/ui/header/Header";
import NavBar from "@/components/ui/navBar/NavBar";
import TodayLabel from "@/components/ui/todayLabel/TodayLabel";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <TodayLabel />
      <main role="main">{children}</main>
      <NavBar />
    </div>
  );
}

export default AppLayout;
