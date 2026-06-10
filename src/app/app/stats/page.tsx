import { Metadata } from "next";

import Stats from "@/components/statsPage/Stats";

export const metadata: Metadata = {
  title: "Statistiques",
};

function Page() {
  return <Stats />;
}

export default Page;
