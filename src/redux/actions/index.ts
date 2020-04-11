import api from "../../utils/api";
import store from "store";
export const GET_JOBS_ERROR = "GET_JOBS_ERROR";
export const GET_JOBS_LOADING = "GET_JOBS_LOADING";
export const GET_JOBS_SUCCESS = "GET_JOBS_SUCCESS";

export const GET_USER_ERROR = "GET_USER_ERROR";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_LOADING = "GET_USER_LOADING";

export function getUser() {
  return dispatch => {
    dispatch({ type: GET_USER_LOADING });
    const user = store.get("okta-token-storage").idToken.claims.name;
    dispatch({ type: GET_USER_SUCCESS, payload: user });
  };
}

export function getJobs() {
  return dispatch => {
    dispatch({ type: GET_JOBS_LOADING });
    api()
      .get("/users/jobs")
      .then(res => {
        console.log("fired getjobs");
        dispatch({ type: GET_JOBS_SUCCESS, payload: res.data });
      })

      .catch(error => {
        dispatch({ type: GET_JOBS_ERROR, payload: error });
      });
  };
}

export function deleteJob(jobId) {
  return dispatch => {
    api()
      .delete(`/users/removeJob/${jobId}`)
      .then(res => {
        if (res.status == 200) {
          console.log(res.status);
          api()
            .get("/users/jobs")
            .then(res => {
              console.log("fired getjobs");
              dispatch({ type: GET_JOBS_SUCCESS, payload: res.data });
            })

            .catch(error => {
              dispatch({ type: GET_JOBS_ERROR, payload: error });
            });
        }
      });

    // if (response.toString() === "Jwt is expired") {
    //  dispatch({type:JWT_EXPIRED,payload:true})
    // }//<Redirect to="/login" />;
  };
}
