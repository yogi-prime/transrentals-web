"use client";

import React, { createContext, useContext, useState } from "react";

type Ctx = {
  searchType: string;
  setSearchType: (s: string) => void;
  docked: boolean;
  setDocked: (v: boolean) => void;
  headerH: number;
  setHeaderH: (n: number) => void;
};

const SearchUI = createContext<Ctx | null>(null);

export const SearchUIProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [searchType, setSearchType] = useState<string>("self-drive");
  const [docked, setDocked] = useState(false);
  const [headerH, setHeaderH] = useState(0);

  return (
    <SearchUI.Provider value={{ searchType, setSearchType, docked, setDocked, headerH, setHeaderH }}>
      {children}
    </SearchUI.Provider>
  );
};

export const useSearchUI = () => {
  const ctx = useContext(SearchUI);
  if (!ctx) throw new Error("useSearchUI used outside provider");
  return ctx;
};
