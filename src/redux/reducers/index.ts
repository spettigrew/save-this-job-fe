import {
  GET_USER_ERROR,
  GET_USER_LOADING,
  GET_USER_SUCCESS,
  GET_JOBS_ERROR,
  GET_JOBS_LOADING,
  GET_JOBS_SUCCESS,
  GET_JOB_ID,
  DELETE_JOBS_LOADING,
  DELETE_JOBS_SUCCESS,
  DELETE_JOBS_ERROR
} from "../actions/index";

const initialState = {
  loading: false,
  error: "",
  deleteSuccess: false,
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
    case GET_USER_ERROR:
      return {
        ...state,
        error: action.payload,
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
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case DELETE_JOBS_LOADING:
      return {
        ...state,
        loading: true,
        deleteSuccess: false
      };
    case DELETE_JOBS_SUCCESS:
      return {
        ...state,
        jobs: action.payload,
        loading: false,
        deleteSuccess: true
      };
    case DELETE_JOBS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case GET_JOB_ID:
      return {
        ...state,
        jobId: action.payload
      };
  }
}
