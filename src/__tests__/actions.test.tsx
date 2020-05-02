import "@testing-library/jest-dom/extend-expect";
import {
  getJobs,
  getUser,
  deleteJob,
  updateJob,
  clearMessages,
  getCurrentJob
} from "../redux/actions/index";
import { mockStore } from "./Mocks/mockStore";
import { getAction } from "./Mocks/getActions";
import {
  GET_CURRENT_JOB,
  CLEAR_MESSAGES,
  GET_JOBS_LOADING,
  GET_USER_LOADING,
  DELETE_JOBS_LOADING,
  UPDATE_JOBS_LOADING,
  GET_JOBS_ERROR
} from "../redux/actions/index";
//set env to staging for baseUrl use
beforeAll(() => {
  process.env = Object.assign(process.env, { NODE_ENV: "staging" });
});

describe("actions", () => {
  const store = mockStore();

  it("should have have action type GET_JOBS_LOADING", async () => {
    store.dispatch(getJobs());
    expect(await getAction(store, GET_JOBS_LOADING)).toEqual({
      type: "GET_JOBS_LOADING"
    });
  });

  it("should have have action type GET_USER_LOADING", async () => {
    store.dispatch(getUser());
    expect(await getAction(store, GET_USER_LOADING)).toEqual({
      type: "GET_USER_LOADING"
    });
  });

  it("should have have action type DELETE_JOBS_LOADING", async () => {
    store.dispatch(deleteJob(""));
    expect(await getAction(store, DELETE_JOBS_LOADING)).toEqual({
      type: "DELETE_JOBS_LOADING"
    });
  });

  it("should have have action type UPDATE_JOBS_LOADING", async () => {
    store.dispatch(updateJob("", ""));
    expect(await getAction(store, UPDATE_JOBS_LOADING)).toEqual({
      type: "UPDATE_JOBS_LOADING"
    });
  });
  it("should have have action type CLEAR_MESSAGES", async () => {
    store.dispatch(clearMessages());
    expect(await getAction(store, CLEAR_MESSAGES)).toEqual({
      type: "CLEAR_MESSAGES"
    });
  });
  it("should have have action type GET_CURRENT_JOB", async () => {
    store.dispatch(getCurrentJob(""));
    expect(await getAction(store, GET_CURRENT_JOB)).toEqual({
      type: "GET_CURRENT_JOB",
      payload: ""
    });
  });
});
