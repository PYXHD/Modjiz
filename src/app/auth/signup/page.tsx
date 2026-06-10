import type { Metadata } from "next";

import SignUp from "@/components/auth/modals/SignUp";

export const metadata: Metadata = {
  title: "Créer un compte",
  description: "Créez votre compte Modjiz",
};

function Page() {
  return <SignUp />;
}

export default Page;
