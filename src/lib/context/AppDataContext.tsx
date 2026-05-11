"use client";

import type { Entry } from "@/types/Entry";
import type { ISODate } from "@/types/Time";
import type { ReactNode } from "react";

import { createContext, useContext } from "react";

type AppData = {
  userData: Entry[];
  historyData: ISODate[];
  currentDate: Date;
};

type DataProviderProps = {
  children: ReactNode;
  value: AppData;
};

const AppDataContext = createContext<AppData | null>(null);

export function DataProvider({ children, value }: DataProviderProps) {
  return (
    <AppDataContext.Provider value={value}>{children}</AppDataContext.Provider>
  );
}

export function useAppData() {
  const context = useContext(AppDataContext);

  if (!context) {
    throw new Error("useAppData must be used inside DataProvider");
  }

  return context;
}
