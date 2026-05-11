import Header from "@/components/ui/header/Header";
import NavBar from "@/components/ui/navBar/NavBar";
import TodayLabel from "@/components/ui/todayLabel/TodayLabel";
import { getHistoryData } from "@/data/getHistoryData";
import { getOrCreateUserId } from "@/data/getOrCreateUserId";
import { getUserData } from "@/data/getUserData";
import { DataProvider } from "@/lib/context/AppDataContext";

async function AppLayout({ children }: { children: React.ReactNode }) {
  const userId = await getOrCreateUserId();

  const userData = await getUserData(userId);
  const historyData = await getHistoryData(userId);

  return (
    <DataProvider value={{ userData, historyData }}>
      <div>
        <Header />
        <TodayLabel />
        <main role="main">{children}</main>
        <NavBar />
      </div>
    </DataProvider>
  );
}

export default AppLayout;
