import { useReducer, useContext, useEffect } from "react";
import { reducerFunc } from "./utils/reducerFunc";
import { initialState } from "./utils/initialState";
import { context } from "./ContextProvider";
import MySwitch from "./Components/MySwitch";
import { Button } from "@mui/material";
import Header from "./Components/Header";
import Options from "./Components/Options";
import Timer from "./Components/Timer";
import { useLocation } from "react-router";
import { Categories, Username } from "./types/quiz.types";
import { quiz } from "./data";
import QuestionComponent from "./Components/Question";

export default function Main() {
  const [state, dispatch] = useReducer(reducerFunc, initialState);
  const contextValues = useContext(context);
  const location = useLocation();

  const userObject = location.state as Username;

  const selectedCategory = userObject.category;

  const selectedCategoryObj =
    quiz.categories[selectedCategory as keyof Categories];

  console.log(userObject.name);

  return (
    <div
      style={{
        position: "fixed",
        left: "0",
        right: "0",
        top: "0",
        bottom: "0",
      }}
    >
      {" "}
      {state.quizRunning === false ? (
        <div>
          <MySwitch></MySwitch>
          <h1 style={{ color: contextValues?.modeStyle.textColor }}>
            Quiz Ended
          </h1>
          <h2 style={{ color: contextValues?.modeStyle.textColor }}>
            Score: {state.points}
          </h2>

          <Button
            onClick={() => {
              dispatch({ action: "RESTART" });
            }}
            variant="contained"
            style={{
              backgroundColor: contextValues?.modeStyle.elementBackgroundColor,
              color: contextValues?.modeStyle.elementTextColor,
            }}
          >
            Restart
          </Button>
        </div>
      ) : (
        <div>
          {" "}
          <MySwitch></MySwitch>
          <Header name={userObject.name}></Header>
          <QuestionComponent
            state={state}
            questionsObj={selectedCategoryObj}
          ></QuestionComponent>
          <Options
            state={state}
            dispatch={dispatch}
            questionsObj={selectedCategoryObj}
          ></Options>
          <Timer state={state} dispatch={dispatch}></Timer>
        </div>
      )}
    </div>
  );
}
