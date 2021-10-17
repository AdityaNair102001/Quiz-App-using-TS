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
