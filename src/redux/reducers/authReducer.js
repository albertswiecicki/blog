import { authActionTypes } from "../actions/actionTypes";

const initialState = {
  user: { email: "initial@state.email" },
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case authActionTypes.SET_CURRENT_USER:
      console.log("we encouterd dispatched action :)");
      return {
        ...state,
        user: payload,
      };

    default:
      return state;
  }
};

export default authReducer;
