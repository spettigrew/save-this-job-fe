import {
  GET_USER_ERROR,
  GET_USER_LOADING,
  GET_USER_SUCCESS,
  GET_JOBS_ERROR,
  GET_JOBS_LOADING,
  GET_JOBS_SUCCESS,
  GET_JOB_ID
} from "../actions/index";

const initialState = {
  loading: false,
  error: "",
  user: {
    firstName: "",
    lastName: ""
  },
  jobs: [],
  jobId: 0
};

export function reducer(state = initialState, action: any): Object {
  switch (action.type) {
    default:
      return {
        state
      };
    case GET_USER_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_USER_SUCCESS:
      const fullName = action.payload.split(" ");
      const firstName = fullName[0];
      const lastName = fullName[1];
      return {
        ...state,
        user: {
          firstName,
          lastName
        },
        loading: false
      };
    case GET_JOBS_LOADING:
      return { ...state, loading: true };
    case GET_JOBS_SUCCESS:
      return {
        ...state,
        jobs: action.payload,
        loading: false
      };
    case GET_JOBS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case GET_JOB_ID:
      return {
        ...state,
        jobId: action.payload
      };
  }
}
