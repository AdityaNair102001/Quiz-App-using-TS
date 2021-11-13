import MySwitch from "./Components/MySwitch";
import { useContext } from "react";
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
} from "@mui/material";
import "./Start.css";
export default function Start() {
  const contextValues = useContext(context);

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
            onChange={(event) => {}}
          />
        </FormControl>
      </div>
      <FormControl component="fieldset">
        <FormLabel component="legend" sx={{ color: "#1976d2" }}>
          Genre
        </FormLabel>
        <RadioGroup
          row={false}
          aria-label="gender"
          name="row-radio-buttons-group"
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
            value="Harry Potter"
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
        <button
          style={{
            margin: "1rem",
            padding: "0.5rem 1rem",
            backgroundColor: "transparent",
            color: contextValues?.modeStyle.textColor,
            borderColor: contextValues?.modeStyle.borderColor,
          }}
        >
          Play
        </button>
      </div>
    </div>
  );
}
