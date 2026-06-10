import type { Metadata } from "next";

import PasswordReset from "@/components/auth/modals/PasswordReset";

export const metadata: Metadata = {
  title: "Réinitialiser mot de passe",
  description: "Réinitialisez votre mot de passe",
};

function Page() {
  return <PasswordReset />;
}

export default Page;
