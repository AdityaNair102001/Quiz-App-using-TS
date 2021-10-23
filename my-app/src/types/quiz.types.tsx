import React, { ReactNode } from "react";

export type Quiz = {
  title: string;
  questions: Question[];
};

export type Option = {
  text: string;
  isRight: boolean;
};

export type Question = {
  question: string;
  points: number;
  options: Option[];
  negativePoints?: number;
};

export type actiontype = {
  action: "INC" | "DEC" | "RESTART" | "TIMER";
};

export type Mode = {
  mode: "LIGHT" | "DARK";
};

export type Children = {
  children: ReactNode;
};

export type ModeStyle = {
  backgroundColor: string;
  borderColor: string;
  textColor: string;
  elementBackgroundColor: string;
  elementTextColor: string;
};

export type InitialState = {
  questionNo: number;
  points: number;
  timer: number;
  quizRunning: boolean;
};

export type Context = {
  theme: Mode;
  setTheme: React.Dispatch<React.SetStateAction<Mode>>;
  modeStyle: ModeStyle;
};
