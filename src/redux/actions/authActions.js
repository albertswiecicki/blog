import { authActionTypes } from "./actionTypes";

export const setCurrentUser = (user) => ({
  type: authActionTypes.SET_CURRENT_USER,
  payload: user,
});
