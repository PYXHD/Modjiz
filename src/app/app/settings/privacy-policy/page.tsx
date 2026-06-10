import type { Metadata } from "next";

import PrivacyPolicy from "@/components/settingsPage/legals/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Informations relatives au traitement des données personnelles sur Modjiz.",
};

function Page() {
  return <PrivacyPolicy />;
}

export default Page;
