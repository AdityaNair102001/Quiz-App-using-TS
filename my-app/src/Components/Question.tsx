import { useContext } from "react";
import { context } from "../ContextProvider";
import { Category, InitialState } from "../types/quiz.types";

export default function QuestionComponent(props: {
  state: InitialState;
  questionsObj: Category;
}) {
  const contextValues = useContext(context);
  const questions = props.questionsObj.questions;

  return (
    <div>
      <div
        style={{
          fontSize: "1.2rem",
          display: "flex",
          justifyContent: "space-between",
          width: "50%",
          margin: "auto",
        }}
      >
        <div style={{ color: contextValues?.modeStyle.textColor }}>
          {props.state.quizRunning === true ? (
            <div>Question no: {props.state.questionNo}</div>
          ) : (
            <div></div>
          )}
        </div>
        <div
          style={{
            fontWeight: "bold",
            color: contextValues?.modeStyle.textColor,
          }}
        >
          Score: {props.state.points}
        </div>
      </div>

      <div
        style={{
          fontSize: "1.8rem",
          fontFamily: "'Slabo 27px', serif",
          border: "1px grey solid",
          width: "50%",
          margin: "1rem auto",
          padding: "0.8rem",
          color: contextValues?.modeStyle.textColor,
        }}
      >
        {questions[props.state.questionNo - 1].question}
      </div>
    </div>
  );
}
