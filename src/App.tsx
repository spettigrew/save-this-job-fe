import React from "react";
import AppWithRouterAccess from "./routes/Protected/AppWithRouterAccess";
import "semantic-ui-less/semantic.less";
import Footer from "./routes/footer";
function App() {
  return (
    <div>
      <AppWithRouterAccess />
      <Footer />
    </div>
  );
}

export default App;
