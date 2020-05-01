import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Footer from "../routes/footer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "../redux/reducers/index";
import Home from "../routes/Home";
const store = createStore(reducer);
//set env to staging for baseUrl use
beforeAll(() => {
  process.env = Object.assign(process.env, { NODE_ENV: "staging" });
});

jest.mock("okta-react-bug-fix", () => ({
  useOktaAuth: () => {
    return {
      authState: {},
      authService: {}
    };
  }
}));
test("should render button", () => {
  const { getByText } = render(
    <Provider store={store}>
      <Footer />
    </Provider>
  );
  const linkElement = getByText(/Sitemap/i);
  expect(linkElement).toBeInTheDocument();
});

test("should render h3", () => {
  const { getByText } = render(
    <Provider store={store}>
      <Home />
    </Provider>
  );
  const myMock = jest.fn();

  const linkElement = getByText(/How do I get the extension?/i);
  expect(linkElement).toBeInTheDocument();
});
