import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Footer from "../routes/footer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "../redux/reducers/index";
import HomePageHeader from "../routes/HomePageHeader";
import TopBodySegment from "../routes/TopBodySegment";
import MiddleBodySegment from "../routes/MiddleBodySegment";
import Dashboard from "../routes/Protected/dashboard";
import Navigation from "../routes/navigation";
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
      <MiddleBodySegment />
    </Provider>
  );
  const myMock = jest.fn();

  const linkElement = getByText(/How do I get the extension?/i);
  expect(linkElement).toBeInTheDocument();
});

test("button should be enabled", () => {
  const { getByText } = render(
    <Provider store={store}>
      <HomePageHeader />
    </Provider>
  );
  expect(getByText("Get Started")).not.toHaveAttribute("disabled");
});

test("should render text on hover", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <HomePageHeader />
    </Provider>
  );
  const callToAction = getByTestId("main-button");
  expect(callToAction).toHaveTextContent("Get StartedInstall Extension");
});

test("Render string Problem", () => {
  const { getByText } = render(
    <Provider store={store}>
      <TopBodySegment />
    </Provider>
  );
  const element = getByText(/Problem/i);
  expect(element).toBeVisible();
});

test("Render solution", async () => {
  const { getByText } = render(
    <Provider store={store}>
      <TopBodySegment />
    </Provider>
  );
  const el = getByText("Solution");
  expect(el).toBeVisible();
});

test("what is save this job", async () => {
  const { getByText } = render(
    <Provider store={store}>
      <MiddleBodySegment />
    </Provider>
  );
  const el = getByText('"What is Save This Job?"');
  expect(el).toBeVisible();
});

test("text content here", async () => {
  const { getByText } = render(
    <Provider store={store}>
      <MiddleBodySegment />
    </Provider>
  );
  const el = getByText("here");
  expect(el).toBeVisible();
});

test("render second paragraph", async () => {
  const { getByText } = render(
    <Provider store={store}>
      <TopBodySegment />
    </Provider>
  );
  const el = getByText(
    "A Chrome extension that lets you grab and save job postings with a rating of how interested you are in the job saving you time to continue your job search."
  );
  expect(el).toBeVisible();
});

test("render first paragraph", async () => {
  const { getByText } = render(
    <Provider store={store}>
      <TopBodySegment />
    </Provider>
  );
  const el = getByText(
    "Job searchers, already stressed, can't keep track of various postings on various sites. Bookmarking and spreadsheets are just making the situation overwhelming."
  );
  expect(el).toBeVisible();
});

test("tag to chrome store", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <MiddleBodySegment />
    </Provider>
  );

  const tag = getByTestId("chromeLink");
  expect(tag).toHaveAttribute("href");
});

test("Clock image renders", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <TopBodySegment />
    </Provider>
  );

  const img = getByTestId("time");
  expect(img).toHaveAttribute("src");
});
