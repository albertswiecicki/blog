// supported_tags should be exported somewhere imho
// const supported_tags = {
//   opinion: "opinion",
//   vacation: "vactation",
//   hobby: "hobby",
//   programming: "programming",
// };

import { blogActionTypes } from "../actions/actionTypes";

const postTemplate = {
  id: "123456",
  title: "post title here",
  // date: "September 14, 2016",
  imageUrl: "https://picsum.photos/200",
  imageAlt: "alt image text here",
  body: "this is a text from the post body, <h1>it supports html syntax </h1>, <img src=https://picsum.photos/200>",
  createdAt: { seconds: new Date().getTime() / 1000 }, // only day, there is no sense to put hour, cuz we would need to deal with timezones ect
  updatedAt: null, //  null or date
  createdBy: "Albert", // currently
  likes: [], // nicks of everybody who liked the post (only logins)
  favoirtes: [], // // nicks of everybody who favorited the post (only logins)
  anonymus_likes: [], // counter of anonymous likes
  can_be_accessed_by_id: true, // true / false (can be accessed by id)
  displayed_by_default: true, // is displayed by default in the default blog section
  tags: [], // tags to filter by
  comments: [], // comment ids
};

// probably should be moved to another place
// const commentTemplate = {
//   userId: "",
//   postId: "",
//   body: "",
//   creationDate: "",
//   lastTimeEdited: "",
//   likes: 0,
// };

const initialState = {
  // posts: [postTemplate],
  posts: Array(10).fill(postTemplate),
};

const blogReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case blogActionTypes.SET_POSTS:
      return { posts: [...state.posts, ...payload] };
    // return { posts: payload };
    // return { posts: state.posts };

    default:
      return state;
  }
};

export default blogReducer;
