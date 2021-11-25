import React from "react";
import { createContext } from "react";
import { useState, useReducer } from "react";
import { Mode, Context, ModeStyle } from "./types/quiz.types";

import { Children } from "./types/quiz.types";

export const context = createContext<Context | undefined>(undefined);

export default function ContextProvider({ children }: Children) {
  const [theme, setTheme] = useState<Mode>({ mode: "LIGHT" });

  const modeStyle: ModeStyle =
    theme.mode === "DARK"
      ? {
          backgroundColor: "black",
          borderColor: "white",
          textColor: "white",
          elementBackgroundColor: "white",
          elementTextColor: "black",
          placeholderColor: "#1976d2",
        }
      : {
          backgroundColor: "white",
          borderColor: "black",
          textColor: "black",
          elementBackgroundColor: "black",
          elementTextColor: "white",
          placeholderColor: "black",
        };

  return (
    <context.Provider value={{ theme, setTheme, modeStyle }}>
      {children}
    </context.Provider>
  );
}
