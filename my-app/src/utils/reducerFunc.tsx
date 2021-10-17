import { actiontype } from "../types/quiz.types";
import { initialState } from "./initialState";

export function reducerFunc(
  state: typeof initialState,
  { action }: actiontype
) {
  switch (action) {
    case "INC":
      return state.questionNo < 3
        ? {
            ...state,
            questionNo: state.questionNo + 1,
            points: (state.points += 1),
          }
        : { ...state, timer: 0, questionNo: state.questionNo };
    case "DEC":
      return {
        ...state,
        questionNo: state.questionNo + 1,
        points: (state.points -= 1),
      };
    case "RESTART":
      return { ...state, questionNo: 1, points: 0 };
    case "TIMER":
      return state.timer > 0
        ? { ...state, timer: state.timer - 1 }
        : state.questionNo < 3
        ? { ...state, timer: 15, questionNo: state.questionNo + 1 }
        : { ...state, timer: 0, questionNo: state.questionNo };
  }
}
