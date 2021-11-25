import React, { ReactNode } from "react";

export type Quiz = {
  title: string;
  categories: Categories;
};

export type Categories = {
  Football: Category;
  Javascript: Category;
  HarryPotter: Category;
};

export type Category = {
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
  placeholderColor: string;
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

export type Username = {
  name: string;
  category: "football" | "javascript" | "harrypotter";
};
