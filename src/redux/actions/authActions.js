import { authActionTypes } from "./actionTypes";
import { getUserData } from "../../firestore";

export const setCurrentUser = (user) => ({
  type: authActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const loadUser = (currentUser) => async (dispatch, getState) => {
  console.log("loaded user data", currentUser);
  if (currentUser) {
    const userData = await getUserData(currentUser.uid);
    currentUser.login = userData.login;
    currentUser.isAdmin = userData.isAdmin;
  }
  dispatch(setCurrentUser(currentUser));
};
