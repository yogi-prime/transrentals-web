"use client";
import React, {createContext, useContext, useState} from "react";

type Ctx = {
  searchType: string;
  setSearchType: (s: string) => void;
  docked: boolean;
  setDocked: (v: boolean) => void;
  headerH: number;
  setHeaderH: (n: number) => void;
};

const CtxObj = createContext<Ctx | null>(null);

export const SearchUIProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [searchType, setSearchType] = useState("self-drive");
  const [docked, setDocked] = useState(false);
  const [headerH, setHeaderH] = useState(0);

  return (
    <CtxObj.Provider value={{searchType, setSearchType, docked, setDocked, headerH, setHeaderH}}>
      {children}
    </CtxObj.Provider>
  );
};

export const useSearchUI = () => {
  const v = useContext(CtxObj);
  if (!v) throw new Error("useSearchUI outside provider");
  return v;
};
