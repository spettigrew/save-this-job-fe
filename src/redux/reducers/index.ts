import {
  GET_USER_ERROR,
  GET_USER_LOADING,
  GET_USER_SUCCESS,
  GET_JOBS_ERROR,
  GET_JOBS_LOADING,
  GET_JOBS_SUCCESS,
  GET_CURRENT_JOB,
  DELETE_JOBS_LOADING,
  DELETE_JOBS_SUCCESS,
  DELETE_JOBS_ERROR,
  UPDATE_JOBS_LOADING,
  UPDATE_JOBS_SUCCESS,
  UPDATE_JOBS_ERROR,
  UPDATE_CURRENT_JOB,
  CLEAR_MESSAGES
} from "../actions/index";

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
    jobTitle: "",
    urlText: "",
    rating: 3,
    description: "",
    notes: "",
    applicationDeadline: "",
    companyTitle: "",
    companyUrl: ""
  }
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
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case DELETE_JOBS_LOADING:
      return {
        ...state,
        loading: true,
        success: {
          state: false,
          type: "",
          message: ""
        }
      };
    case DELETE_JOBS_SUCCESS:
      return {
        ...state,
        jobs: action.payload,
        loading: false,
        success: {
          state: true,
          type: "Deleted",
          message: "Successfully Deleted"
        }
      };
    case DELETE_JOBS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case UPDATE_JOBS_LOADING:
      return {
        ...state,
        loading: true,
        success: {
          state: false,
          type: "",
          message: ""
        }
      };
    case UPDATE_JOBS_SUCCESS:
      return {
        ...state,
        loading: false,
        jobs: action.payload,
        success: {
          state: true,
          type: "Updated",
          message: "Successfully Updated Job"
        }
      };
    case UPDATE_JOBS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case GET_CURRENT_JOB:
      let thisJob;
      if (state.jobs.find(obj => obj.id === action.payload)) {
        thisJob = state.jobs.find(obj => obj.id === action.payload);
      } else {
        thisJob = state.currentJob;
      }
      return {
        ...state,
        currentJob: {
          ...state.currentJob,
          ...thisJob
        }
      };
    case UPDATE_CURRENT_JOB:
      return {
        ...state,
        currentJob: {
          ...state.currentJob,
          ...action.payload
        }
      };
    case CLEAR_MESSAGES:
      return {
        ...state,
        success: {
          state: false,
          type: "",
          message: ""
        }
      };
  }
}
