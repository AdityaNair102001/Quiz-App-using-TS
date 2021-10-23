import { useContext, useEffect } from "react";
import { context } from "../ContextProvider";
import { InitialState } from "../types/quiz.types";
import { actiontype } from "../types/quiz.types";

export default function Timer(props: {
  state: InitialState;
  dispatch: React.Dispatch<actiontype>;
}) {
  const contextValues = useContext(context);

  useEffect(() => {
    const id = setInterval(() => {
      props.dispatch({ action: "TIMER" });
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [props.state.timer]);

  return (
    <div>
      <h3
        style={
          props.state.timer > 5
            ? { fontSize: "3rem", color: contextValues?.modeStyle.textColor }
            : { color: "red", fontSize: "3rem" }
        }
      >
        {props.state.timer}
      </h3>
    </div>
  );
}
