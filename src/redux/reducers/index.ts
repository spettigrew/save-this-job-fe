import { GET_USER } from "../actions/index";

const initialState = {
  user: {
    firstName: "",
    lastName: ""
  }
};

export function reducer(state = initialState, action: any): Object {
  switch (action.type) {
    default:
      return {
        state
      };
    case GET_USER:
      const fullName = action.payload.split(" ");
      const firstName = fullName[0];
      const lastName = fullName[1];
      return {
        ...state,
        user: {
          firstName,
          lastName
        }
      };
  }
}
