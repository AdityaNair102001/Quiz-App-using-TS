import { Quiz } from "./types/quiz.types";

export const quiz: Quiz = {
  title: "Quiz App",
  questions: [
    {
      question: "Who is the top goal scorer for FC Barcelona?",
      points: 5,
      options: [
        { text: "Leo Messi", isRight: true },
        { text: "Luis Suarez", isRight: false },
        { text: "T.Henry", isRight: false },
        { text: "Andres Iniesta", isRight: false },
      ],
      negativePoints: 2,
    },
    {
      question: "Barcelona is famous for playing which style of football?",
      points: 5,
      options: [
        { text: "Attacking Football", isRight: false },
        { text: "Tiki-Taka", isRight: true },
        { text: "Possession Football", isRight: false },
        { text: "Defensive Football", isRight: false },
      ],
    },
    {
      question: "In which year did Barcelona won a sextuple?",
      points: 5,
      options: [
        { text: "2010", isRight: false },
        { text: "2015", isRight: false },
        { text: "2009", isRight: true },
        { text: "2006", isRight: false },
      ],
      negativePoints: 2,
    },
  ],
};
