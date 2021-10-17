import React, { useEffect, useReducer, useState } from "react";
import "./App.css";
import { quiz } from "./data";
import { Mode } from "./types/quiz.types";
import Switch from "@mui/material/Switch";
import { initialState } from "./utils/initialState";
import { reducerFunc } from "./utils/reducerFunc";
import { optionHandler } from "./utils/optionHandler";

function App() {
  const [state, dispatch] = useReducer(reducerFunc, initialState);

  const questions = quiz.questions;

  const [answerSelected, setAnswerSelected] = useState(false);

  const [theme, setTheme] = useState<Mode>({ mode: "LIGHT" });

  const modeStyle =
    theme.mode === "DARK"
      ? {
          backgroundColor: "black",
          borderColor: "white",
          textColor: "white",
        }
      : {
          backgroundColor: "white",
          borderColor: "black",
          textColor: "black",
        };

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ action: "TIMER" });
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [state.timer]);

  return (
    <div style={{ backgroundColor: modeStyle.backgroundColor }} className="App">
      <div style={{ textAlign: "right" }}>
        <Switch
          size="medium"
          style={{ backgroundColor: "black" }}
          onChange={() => {
            theme.mode === "LIGHT"
              ? setTheme({ mode: "DARK" })
              : setTheme({ mode: "LIGHT" });
          }}
        />
      </div>

      <h1 style={{ color: modeStyle.textColor }}>Quiz App 🔥</h1>
      <h3 style={{ marginLeft: "0rem", color: modeStyle.textColor }}>
        Welcome, Aditya
      </h3>
      <div
        style={{
          fontSize: "1.2rem",

          display: "flex",
          justifyContent: "space-between",
          width: "50%",
          margin: "auto",
        }}
      >
        <div style={{ color: modeStyle.textColor }}>
          Question no: {state.questionNo}
        </div>
        <div style={{ fontWeight: "bold", color: modeStyle.textColor }}>
          Score: {state.points}
        </div>
      </div>
      <div
        style={{
          fontSize: "1.8rem",
          border: "1px grey solid",
          width: "50%",
          margin: "1rem auto",
          padding: "0.8rem",
          color: modeStyle.textColor,
        }}
      >
        {questions[state.questionNo - 1].question}
      </div>
      {questions[state.questionNo - 1].options.map((option) => {
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
                () => optionHandler(option, dispatch, setAnswerSelected),
                1000
              );
            }}
          >
            {option.text}
          </div>
        );
      })}

      <h3
        style={
          state.timer > 5
            ? { fontSize: "3rem", color: modeStyle.textColor }
            : { color: "red", fontSize: "3rem" }
        }
      >
        {state.timer}
      </h3>
    </div>
  );
}

export default App;
