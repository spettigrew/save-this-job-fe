import api from "../../utils/api";
import store from "store";

export const GET_USER = "GET_USER";

export function getUser() {
  return dispatch => {
    const user = store.get("okta-token-storage").idToken.claims.name;

    dispatch({ type: GET_USER, payload: user });
  };
}
