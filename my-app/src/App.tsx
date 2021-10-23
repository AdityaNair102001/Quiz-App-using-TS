import React, { useContext, useEffect, useReducer, useState } from "react";
import "./App.css";
import { quiz } from "./data";
import { Mode } from "./types/quiz.types";

import { initialState } from "./utils/initialState";
import { reducerFunc } from "./utils/reducerFunc";
import { optionHandler } from "./utils/optionHandler";
import { context } from "./ContextProvider";
import Header from "./Components/Header";
import Question from "./Components/Question";
import Options from "./Components/Options";
import Timer from "./Components/Timer";
import MySwitch from "./Components/MySwitch";
import { Button } from "@mui/material";

function App() {
  const contextValues = useContext(context);

  const [state, dispatch] = useReducer(reducerFunc, initialState);

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ action: "TIMER" });
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [state.timer]);

  return (
    <div
      style={{ backgroundColor: contextValues?.modeStyle.backgroundColor }}
      className="App"
    >
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
          >
            Restart
          </Button>
        </div>
      ) : (
        <div>
          {" "}
          <MySwitch></MySwitch>
          <Header></Header>
          <Question state={state}></Question>
          <Options state={state} dispatch={dispatch}></Options>
          <Timer state={state} dispatch={dispatch}></Timer>
        </div>
      )}
    </div>
  );
}

export default App;
