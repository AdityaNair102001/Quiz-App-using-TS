import React from "react";
import { createContext } from "react";
import { useState, useReducer } from "react";
import { Mode, Context } from "./types/quiz.types";
import { reducerFunc } from "./utils/reducerFunc";
import { initialState } from "./utils/initialState";

import { Children } from "./types/quiz.types";

export const context = createContext<Context | undefined>(undefined);

export default function ContextProvider({ children }: Children) {
  const [theme, setTheme] = useState<Mode>({ mode: "LIGHT" });

  const modeStyle =
    theme.mode === "DARK"
      ? {
          backgroundColor: "black",
          borderColor: "white",
          textColor: "white",
        }
      : {
          backgroundColor: "white",
          borderColor: "black",
          textColor: "black",
        };

  return (
    <context.Provider value={{ theme, setTheme, modeStyle }}>
      {children}
    </context.Provider>
  );
}
