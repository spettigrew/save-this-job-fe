import React from "react";
import { render } from "@testing-library/react";
import Footer from "../routes/footer";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducer } from "../redux/reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

test("renders learn react link", () => {
  const { getByText } = render(
    <Provider store={store}>
      <Footer />
    </Provider>
  );
  const linkElement = getByText(/Sitemap/i);
  expect(linkElement).toBeInTheDocument();
});
