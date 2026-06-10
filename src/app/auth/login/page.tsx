import type { Metadata } from "next";

import Login from "@/components/auth/modals/Login";

export const metadata: Metadata = {
  title: "Connexion",
  description: "Connectez-vous à votre compte Modjiz.",
};

function Page() {
  return <Login />;
}

export default Page;
