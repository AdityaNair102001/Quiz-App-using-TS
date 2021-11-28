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
          question:
            "Node js is a single threaded application but supports concurrency.",
          points: 5,
          options: [
            { text: "true", isRight: true },
            { text: "false", isRight: false },
          ],
          negativePoints: 2,
        },
        {
          question:
            "In which of the following areas, Node.js is not advised to be used?",
          points: 5,
          options: [
            { text: "Single Page Applications", isRight: false },
            { text: "JSON API based Applications", isRight: false },
            { text: "CPU Intensive Applications", isRight: true },
            { text: "Data Intensive Realtime Applications", isRight: false },
          ],
        },
        {
          question:
            "Which of the following command will show all the modules installed global",
          points: 5,
          options: [
            { text: "$npm ls -g", isRight: false },
            { text: "$npm ls", isRight: false },
            { text: "$npx ls", isRight: true },
            { text: "$npx ls -g", isRight: false },
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
            { text: "Volto", isRight: false },
            { text: "4th wrong option", isRight: false },
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
            { text: "A person who throws fire", isRight: true },
            { text: "An angry red bird", isRight: false },
          ],
          negativePoints: 2,
        },
      ],
    },
  },
};
