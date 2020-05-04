import { reducer } from "../redux/reducers/index";

import { GET_JOBS_LOADING } from "../redux/actions/index";

const initialState = {
  loading: false,
  error: "",
  success: {
    state: false,
    type: "",
    message: ""
  },
  user: {
    firstName: "",
    lastName: ""
  },
  jobs: [],
  currentJob: {
    location: "",
    jobTitle: "",
    urlText: "",
    rating: 3,
    description: "",
    notes: "",
    applicationDeadline: "",
    companyTitle: "",
    companyUrl: ""
  },
  updateDisabled: true
};

describe("INITIAL STATE", () => {
  test("is correct", () => {
    const action = { type: GET_JOBS_LOADING };
    const finalState = { ...initialState, loading: true };

    expect(reducer(initialState, action)).toEqual(finalState);
  });
});
