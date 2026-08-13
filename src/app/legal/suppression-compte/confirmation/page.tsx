import type { Metadata } from "next";

import DeleteConfirmation from "@/components/legals/DeleteConfirmation";

export const metadata: Metadata = {
  title: "Suppression du compte - confirmation",
  description: "Procédure de suppression du compte - confirmation",
};

function Page() {
  return <DeleteConfirmation />;
}

export default Page;
