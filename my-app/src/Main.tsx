import { useReducer, useContext } from "react";
import { reducerFunc } from "./utils/reducerFunc";
import { initialState } from "./utils/initialState";
import { context } from "./ContextProvider";
import MySwitch from "./Components/MySwitch";
import { Button } from "@mui/material";
import Header from "./Components/Header";
import Question from "./Components/Question";
import Options from "./Components/Options";
import Timer from "./Components/Timer";

export default function Main() {
  const [state, dispatch] = useReducer(reducerFunc, initialState);
  const contextValues = useContext(context);
  return (
    <div>
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
          <Header></Header>
          <Question state={state}></Question>
          <Options state={state} dispatch={dispatch}></Options>
          <Timer state={state} dispatch={dispatch}></Timer>
        </div>
      )}
    </div>
  );
}
