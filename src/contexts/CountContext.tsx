import {
  createContext, useContext, useState,
} from "react";

import type { ReactNode } from "react";

type CountContextType = {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

const SomeContext = createContext(null as CountContextType | null);

interface SomeProviderProps { children: ReactNode; }

export function SomeProvider({ children }: SomeProviderProps) {
    const [count, setCount] = useState(0);

    return <SomeContext.Provider value={{count, setCount}}>{children}</SomeContext.Provider>
}

export const useSome = () => {
    const value = useContext(SomeContext);

    if (value == null) {
      throw new Error("useSome has to be used within <SomeProvider>");
    }

    return value;
}
