import { Metadata } from "next";

import Trophies from "@/components/trophiesPage/Trophies";

export const metadata: Metadata = {
  title: "Trophées",
};

function Page() {
  return <Trophies />;
}

export default Page;
