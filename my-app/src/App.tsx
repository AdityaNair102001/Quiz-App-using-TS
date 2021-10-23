import React, { useContext } from "react";
import "./App.css";

import { context } from "./ContextProvider";
import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import Start from "./Start";

function App() {
  const contextValues = useContext(context);

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
