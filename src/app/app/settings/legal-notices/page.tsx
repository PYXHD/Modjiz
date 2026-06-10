import type { Metadata } from "next";

import LegalNotices from "@/components/settingsPage/legals/LegalNotices";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales de Modjiz",
};

function Page() {
  return <LegalNotices />;
}

export default Page;
