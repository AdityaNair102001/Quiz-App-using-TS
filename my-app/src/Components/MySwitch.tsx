import Switch from "@mui/material/Switch";
import { useContext } from "react";
import { context } from "../ContextProvider";

export default function MySwitch() {
  const contextValues = useContext(context);
  return (
    <div>
      {" "}
      <div style={{ textAlign: "right", position: "fixed", right: "2rem" }}>
        <Switch
          size="medium"
          style={{ backgroundColor: "black" }}
          onChange={() => {
            contextValues?.theme.mode === "LIGHT"
              ? contextValues?.setTheme({ mode: "DARK" })
              : contextValues?.setTheme({ mode: "LIGHT" });
          }}
        />
      </div>
    </div>
  );
}
