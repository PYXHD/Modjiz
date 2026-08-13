import type { Metadata } from "next";
import { Suspense } from "react";
import DeleteConfirmation from "@/components/legals/DeleteConfirmation";

export const metadata: Metadata = {
  title: "Suppression du compte - confirmation",
  description: "Procédure de suppression du compte - confirmation",
};

function Page() {
  return (
    <Suspense fallback={<p>Chargement...</p>}>
      <DeleteConfirmation />
    </Suspense>
  );
}

export default Page;
