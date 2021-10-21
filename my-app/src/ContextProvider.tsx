import React from "react";
import { createContext, ReactNode } from "react";
import { useState } from "react";
import { Mode, Context } from "./types/quiz.types";

import { Children } from "./types/quiz.types";

export const context = createContext<Context | undefined>(undefined);

export default function ContextProvider({ children }: Children) {
  const [theme, setTheme] = useState<Mode>({ mode: "LIGHT" });

  return (
    <context.Provider value={{ theme, setTheme }}>{children}</context.Provider>
  );
}
