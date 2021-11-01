import { settingsActionTypes } from "../actions/actionTypes";

const initialState = {
  language: "en",
  // theme: "dark",
};

const settingsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case settingsActionTypes.SET_LANGUAGE:
      console.log("we encouterd dispatched action :)");
      return {
        ...state,
        user: payload,
      };

    default:
      return state;
  }
};

export default settingsReducer;
