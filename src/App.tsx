import React, { useState } from "react";
import "./App.css";
import Footer from "./routes/footer";
import AppWithRouterAccess from "./routes/Protected/AppWithRouterAccess";

import "semantic-ui-less/semantic.less";

function App() {
  return (
    <div className="App">
      <AppWithRouterAccess />
    </div>
  );
}

export default App;
