import React from "react";
import { actiontype, Option } from "../types/quiz.types";
export function optionHandler(
  option: Option,
  dispatch: React.Dispatch<actiontype>,
  setAnswerSelected: React.Dispatch<React.SetStateAction<boolean>>
) {
  if (option.isRight === true) {
    dispatch({ action: "INC" });
    setAnswerSelected(false);
  } else {
    dispatch({ action: "DEC" });
    setAnswerSelected(false);
  }
}
