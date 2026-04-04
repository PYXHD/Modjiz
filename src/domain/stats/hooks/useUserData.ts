import { useState, useEffect } from "react";

import type { Entry } from "@/types/Entry";

import { getUserData } from "@/data/getUserData";

export function useUserData() {
  const [data, setData] = useState<Entry[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getUserData();
        setData(res);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return data;
}
