import { useContext } from "react";
import { context } from "../ContextProvider";

export default function Header(props: { name: string }) {
  const contextValues = useContext(context);

  return (
    <div>
      {" "}
      <h1 style={{ color: contextValues?.modeStyle.textColor }}>Quiz App 🔥</h1>
      <h3
        style={{
          marginLeft: "0rem",
          color: contextValues?.modeStyle.textColor,
        }}
      >
        Welcome, {props.name}
      </h3>
    </div>
  );
}
