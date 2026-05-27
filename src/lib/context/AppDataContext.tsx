"use client";

import type { Entry } from "@/types/Entry";
import type { ISODate } from "@/types/Time";
import type { ReactNode } from "react";

import { createContext, useContext, useState } from "react";

type AppData = {
  userData: Entry[];
  historyData: ISODate[];
  currentDate: Date;
  setHistoryData: React.Dispatch<React.SetStateAction<ISODate[]>>;
};

type DataProviderProps = {
  children: ReactNode;

  value: {
    userData: Entry[];
    historyData: ISODate[];
    currentDate: Date;
  };
};

const AppDataContext = createContext<AppData | null>(null);

export function DataProvider({ children, value }: DataProviderProps) {
  const [historyData, setHistoryData] = useState(value.historyData);

  return (
    <AppDataContext.Provider
      value={{
        ...value,
        historyData,
        setHistoryData,
      }}
    >
      {children}
    </AppDataContext.Provider>
  );
}

export function useAppData() {
  const context = useContext(AppDataContext);

  if (!context) {
    throw new Error("useAppData must be used inside DataProvider");
  }

  return context;
}
