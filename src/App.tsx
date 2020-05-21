import React, { useEffect } from "react";
import AppWithRouterAccess from "./routes/Protected/AppWithRouterAccess";
import "semantic-ui-less/semantic.less";
import ReactGA from "react-ga";

function App() {
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS);

    // pageviews
    ReactGA.pageview(window.location.pathname);
  }, []);
  return (
    <div>
      <AppWithRouterAccess />
    </div>
  );
}

export default App;
