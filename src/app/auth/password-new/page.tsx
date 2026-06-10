import type { Metadata } from "next";

import PasswordNew from "@/components/auth/modals/PasswordNew";

export const metadata: Metadata = {
  title: "Mot de passe",
  description: "Définir un nouveau mot de passe",
};

function Page() {
  return <PasswordNew />;
}

export default Page;
