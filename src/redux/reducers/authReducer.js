import { authActionTypes } from "../actions/actionTypes";
import { setCurrentUser } from "../actions/authActions";
import { getUserData } from "../../firestore";

const initialState = {
  user: { email: "initial@state.email" },
};

export const loadUser = (currentUser) => async (dispatch, getState) => {
  console.log("loaded user data", currentUser);
  if (currentUser) {
    const userData = await getUserData(currentUser.uid);
    currentUser.login = userData.login;
  }
  dispatch(setCurrentUser(currentUser));
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
