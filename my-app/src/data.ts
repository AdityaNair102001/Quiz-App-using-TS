import { Quiz } from "./types/quiz.types";

export const quiz: Quiz = {
  title: "Quiz App",

  categories: {
    Football: {
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
    },
    Javascript: {
      questions: [
        {
          question: "What is Asynchronous function?",
          points: 5,
          options: [
            { text: "Teri maa ki chut", isRight: true },
            { text: "Async execution of a block of code", isRight: false },
            { text: "Promise resolution", isRight: false },
            { text: "idk man", isRight: false },
          ],
          negativePoints: 2,
        },
        {
          question: "What are promises",
          points: 5,
          options: [
            { text: "Attacking Football", isRight: false },
            { text: "Tiki-Taka", isRight: true },
            { text: "Possession Football", isRight: false },
            { text: "Defensive Football", isRight: false },
          ],
        },
        {
          question: "Explain useFFect",
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
    },
    HarryPotter: {
      questions: [
        {
          question: "What is voldemorts real name",
          points: 5,
          options: [
            { text: "Tim Cook", isRight: true },
            { text: "Tom Marvolo Riddle", isRight: false },
            { text: "Krishnakant Jha", isRight: false },
            { text: "Aditya Potter", isRight: false },
          ],
          negativePoints: 2,
        },
        {
          question: "Is dumbledore gay",
          points: 5,
          options: [
            { text: "No", isRight: false },
            { text: "Yes", isRight: true },
          ],
        },
        {
          question: "What is phoenix",
          points: 5,
          options: [
            { text: "Mystical fire bird", isRight: false },
            { text: "blue bird", isRight: false },
            { text: "Aditya duh", isRight: true },
            { text: "Angry Prem Singh", isRight: false },
          ],
          negativePoints: 2,
        },
      ],
    },
  },
};
