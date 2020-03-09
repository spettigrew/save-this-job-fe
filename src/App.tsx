import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { Button } from "semantic-ui-react";

import Navigation from "./routes/navigation";

import Login from "./routes/login";

function App() {
  return (
    <div className="App">
      <Navigation />

      <Route exact path="/login" component={Login} />
      <Button content="Hello World" />
    </div>
  );
}

export default App;
