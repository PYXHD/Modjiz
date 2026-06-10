import { Metadata } from "next";

import Settings from "@/components/settingsPage/Settings";

export const metadata: Metadata = {
  title: "Réglages",
};

function Page() {
  return <Settings />;
}

export default Page;
