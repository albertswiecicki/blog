import { blogActionTypes } from "./actionTypes";
import { getPosts } from "../../firestore";

export const setPosts = (posts) => ({
  type: blogActionTypes.SET_POSTS,
  payload: posts,
});

export const loadPosts = () => async (dispatch, getState) => {
  const posts = await getPosts(); // todo load from local storage / firebase
  console.log("loaded posts");
  dispatch(setPosts(posts));
};
