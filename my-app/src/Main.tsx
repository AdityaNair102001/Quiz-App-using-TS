import { useReducer, useContext, useState } from "react";
import { reducerFunc } from "./utils/reducerFunc";
import { initialState } from "./utils/initialState";
import { context } from "./ContextProvider";
import MySwitch from "./Components/MySwitch";
import {
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import Header from "./Components/Header";
import Options from "./Components/Options";
import Timer from "./Components/Timer";
import { useLocation } from "react-router";
import { Categories, Username } from "./types/quiz.types";
import { quiz } from "./data";
import { useNavigate } from "react-router";
import QuestionComponent from "./Components/Question";

export default function Main() {
  const location = useLocation();
  const navigate = useNavigate();

  const userObject = location.state as Username;

  const selectedCategory = userObject.category;

  const selectedCategoryObj =
    quiz.categories[selectedCategory as keyof Categories];

  const [state, dispatch] = useReducer(reducerFunc, initialState);
  const contextValues = useContext(context);

  const [category, setCategory] = useState<string>(selectedCategory);

  console.log(userObject.name);

  return (
    <div
      style={{
        position: "fixed",
        left: "0",
        right: "0",
        top: "0",
        bottom: "0",
        overflowY: "scroll",
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

          <FormControl component="fieldset">
            <FormLabel component="legend" sx={{ color: "#1976d2" }}>
              Genre
            </FormLabel>
            <RadioGroup
              row={false}
              aria-label="gender"
              name="row-radio-buttons-group"
              onChange={(event) => {
                setCategory(event.target.value);
              }}
              sx={{ alignItems: "center" }}
              defaultValue={category}
            >
              <FormControlLabel
                sx={{ color: contextValues?.modeStyle.textColor }}
                value="Football"
                control={
                  <Radio
                    sx={{
                      color: contextValues?.modeStyle.textColor,
                      "&.Mui-checked": {
                        color: "#1976d2",
                      },
                    }}
                  />
                }
                label="Football"
              />
              <FormControlLabel
                sx={{ color: contextValues?.modeStyle.textColor }}
                value="Javascript"
                control={
                  <Radio
                    sx={{
                      color: contextValues?.modeStyle.textColor,
                      "&.Mui-checked": {
                        color: "#1976d2",
                      },
                    }}
                  />
                }
                label="Javascript"
              />

              <FormControlLabel
                sx={{ color: contextValues?.modeStyle.textColor }}
                value="HarryPotter"
                control={
                  <Radio
                    sx={{
                      color: contextValues?.modeStyle.textColor,
                      "&.Mui-checked": {
                        color: "#1976d2",
                      },
                    }}
                  />
                }
                label="Harry Potter"
              />
            </RadioGroup>
          </FormControl>

          <div>
            <Button
              onClick={() => {
                navigate("/main", {
                  state: { name: userObject.name, category: category },
                });
                dispatch({ action: "RESTART" });
              }}
              variant="contained"
              style={{
                backgroundColor:
                  contextValues?.modeStyle.elementBackgroundColor,
                color: contextValues?.modeStyle.elementTextColor,
              }}
            >
              Restart
            </Button>
          </div>
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
