import { authActionTypes } from "../actions/actionTypes";

const initialState = {
  currentUser: {},
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case authActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };

    default:
      return state;
  }
};

export default authReducer;
