import { actiontype } from "../types/quiz.types";
import { initialState } from "./initialState";

export function reducerFunc(
  state: typeof initialState,
  { action }: actiontype
) {
  switch (action) {
    case "INC":
      return state.questionNo <= 3
        ? state.questionNo === 3
          ? {
              ...state,
              questionNo: state.questionNo,
              points: (state.points += 1),
              quizRunning: false,
              timer: 0,
            }
          : {
              ...state,
              questionNo: state.questionNo + 1,
              points: (state.points += 1),
              timer: 15,
            }
        : {
            ...state,
            timer: 0,
            questionNo: state.questionNo,
            quizRunning: false,
          };
    case "DEC":
      return state.questionNo <= 3
        ? state.questionNo === 3
          ? {
              ...state,
              questionNo: state.questionNo,
              points: (state.points -= 1),
              quizRunning: false,
              timer: 0,
            }
          : {
              ...state,
              questionNo: state.questionNo + 1,
              points: (state.points -= 1),
              timer: 15,
            }
        : {
            ...state,
            timer: 0,
            questionNo: state.questionNo,
            quizRunning: false,
          };
    case "RESTART":
      return {
        ...state,
        questionNo: 1,
        points: 0,
        quizRunning: true,
        timer: 15,
      };
    case "TIMER":
      return state.timer > 0
        ? { ...state, timer: state.timer - 1 }
        : state.questionNo <= 3
        ? state.questionNo === 3
          ? {
              ...state,
              questionNo: state.questionNo,
              timer: 15,
              quizRunning: false,
            }
          : { ...state, timer: 15, questionNo: state.questionNo + 1 }
        : {
            ...state,
            timer: 0,
            questionNo: state.questionNo,
            quizRunning: false,
          };
  }
}
