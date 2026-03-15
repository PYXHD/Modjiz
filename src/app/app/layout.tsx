import Header from "@/components/ui/header/Header";
import TodayLabel from "@/components/ui/todayLabel/TodayLabel";
import NavBar from "@/components/ui/navBar/NavBar";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <TodayLabel />
      <main>{children}</main>
      <NavBar />
    </div>
  );
}

export default AppLayout;
