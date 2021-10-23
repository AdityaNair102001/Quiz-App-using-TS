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
import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import Start from "./Start";

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
      <Routes>
        <Route path="/" element={<Start></Start>} />
        <Route path="/main" element={<Main></Main>}></Route>
      </Routes>
    </div>
  );
}

export default App;
