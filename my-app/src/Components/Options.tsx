import { quiz } from "../data";
import { useState } from "react";
import { InitialState } from "../types/quiz.types";
import { optionHandler } from "../utils/optionHandler";
import { actiontype } from "../types/quiz.types";

export default function Options(props: {
  state: InitialState;
  dispatch: React.Dispatch<actiontype>;
}) {
  const questions = quiz.questions;
  const [answerSelected, setAnswerSelected] = useState(false);
  return (
    <div>
      {" "}
      {props.state.quizRunning === true ? (
        <div>
          {" "}
          {questions[props.state.questionNo - 1].options.map((option) => {
            return (
              <div
                className="options"
                style={
                  answerSelected
                    ? option.isRight
                      ? {
                          color: "green",
                        }
                      : {
                          color: "red",
                        }
                    : {
                        color: "black",
                      }
                }
                onClick={() => {
                  setAnswerSelected(true);
                  setTimeout(
                    () =>
                      optionHandler(option, props.dispatch, setAnswerSelected),
                    1000
                  );
                }}
              >
                {option.text}
              </div>
            );
          })}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
