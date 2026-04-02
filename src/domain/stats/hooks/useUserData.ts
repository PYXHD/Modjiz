import { useState, useEffect } from "react";

import type { Entry } from "@/types/Entry";

import { getUserData } from "@/data/getUserData";

export function useUserData() {
  const [data, setData] = useState<Entry[]>([]);

  useEffect(() => {
    getUserData().then(setData);
  }, []);

  return data;
}
