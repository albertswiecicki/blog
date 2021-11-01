import { blogActionTypes } from "./actionTypes";

export const setPosts = (posts) => ({
  type: blogActionTypes.SET_POSTS,
  payload: posts,
});

export const LoadPosts = () => async (dispatch, getState) => {
  const posts = []; // todo load from local storage / firebase
  console.log("loaded posts");
  dispatch(setPosts(posts));
};
