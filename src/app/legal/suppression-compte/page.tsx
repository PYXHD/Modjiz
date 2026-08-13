import type { Metadata } from "next";

import DeleteAccount from "@/components/legals/DeleteAccount";

export const metadata: Metadata = {
  title: "Suppression du compte",
  description: "Procédure de suppression du compte",
};

function Page() {
  return <DeleteAccount />;
}

export default Page;
