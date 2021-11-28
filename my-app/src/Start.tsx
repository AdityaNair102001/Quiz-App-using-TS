import MySwitch from "./Components/MySwitch";
import { useContext, useState } from "react";
import { context } from "./ContextProvider";
import landingPageLogo from "./assets/landingPageLogo.svg";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  InputLabel,
  Input,
  FormHelperText,
} from "@mui/material";
import "./Start.css";
import { useNavigate } from "react-router";
import validate from "./utils/validate";
export default function Start() {
  const contextValues = useContext(context);

  const [category, setCategory] = useState<string>("");

  const [name, setName] = useState<string>("");

  const [inputError, setInputError] = useState<boolean>(false);

  const [helperText, setHelperText] = useState<string>("");

  const navigate = useNavigate();

  function loadQuiz() {
    console.log(name);
    if (validate(name, category, setInputError, setHelperText) === true) {
      navigate("/main", { state: { name: name, category: category } });
    }
  }

  return (
    <div
      style={{
        backgroundColor: contextValues?.modeStyle.backgroundColor,
      }}
    >
      <MySwitch></MySwitch>
      <h1
        style={{
          color: contextValues?.modeStyle.textColor,
          marginTop: "0rem",
          marginBottom: "2rem",
        }}
      >
        Quiz World
      </h1>
      <img
        src={landingPageLogo}
        alt="landing page logo"
        className="landing-page-logo"
      ></img>
      <h2 style={{ color: contextValues?.modeStyle.textColor }}>
        Challenge yourself in the following categories ;)
      </h2>

      <div className="input-holder">
        <FormControl
          variant="standard"
          fullWidth={true}
          required
          margin="normal"
          error={inputError}
        >
          <InputLabel
            htmlFor="component-simple"
            sx={{
              color: contextValues?.modeStyle.placeholderColor,
            }}
          >
            Name
          </InputLabel>
          <Input
            id="component-simple"
            sx={{
              color: contextValues?.modeStyle.textColor,
            }}
            type="text"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </FormControl>
      </div>

      <FormControl error={inputError} component="fieldset">
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
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>

      <div>
        <button
          style={{
            margin: "1rem",
            padding: "0.5rem 1rem",
            backgroundColor: "transparent",
            color: contextValues?.modeStyle.textColor,
            borderColor: contextValues?.modeStyle.borderColor,
          }}
          onClick={() => {
            loadQuiz();
          }}
        >
          Play
        </button>
      </div>
    </div>
  );
}
