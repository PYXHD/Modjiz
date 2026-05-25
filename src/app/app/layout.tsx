import Header from "@/components/ui/header/Header";
import NavBar from "@/components/ui/navBar/NavBar";
import TodayLabel from "@/components/ui/todayLabel/TodayLabel";

import { getHistoryData } from "@/data/history/getHistoryData";
import { getUserId } from "@/data/id/getUserId";
import { getUserData } from "@/data/user/getUserData";

import { getToday } from "@/lib/time/getToday";

import { DataProvider } from "@/lib/context/AppDataContext";
import { AuthProvider } from "@/lib/context/AuthProvider";

async function AppLayout({ children }: { children: React.ReactNode }) {
  const userId = await getUserId();

  if (!userId) {
    return (
      <AuthProvider>
        <div>Chargement des données...</div>
      </AuthProvider>
    );
  }

  const userData = await getUserData(userId);
  const historyData = await getHistoryData(userId);
  const currentDate = await getToday();

  return (
    <AuthProvider>
      <DataProvider value={{ userData, historyData, currentDate }}>
        <div>
          <Header />
          <TodayLabel />
          <main role="main">{children}</main>
          <NavBar />
        </div>
      </DataProvider>
    </AuthProvider>
  );
}

export default AppLayout;
