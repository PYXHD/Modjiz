import type { Metadata } from "next";

import Password from "@/components/auth/modals/Password";

export const metadata: Metadata = {
  title: "Mot de passe oublié",
  description: "Réinitialisez votre mot de passe Modjiz.",
};

function Page() {
  return <Password />;
}

export default Page;
