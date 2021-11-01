const postTemplate = {
  id: "123456",
  title: "post title here",
  date: "September 14, 2016",
  imageUrl: "https://picsum.photos/200",
  imageAlt: "alt image text here",
  body: "this is a text from the post body, <h1>it supports html syntax </h1>, <img src=https://picsum.photos/200>",
  // comments?
};

const initialState = {
  // posts: [postTemplate],
  posts: Array(10).fill(postTemplate),
};

const blogReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};

export default blogReducer;
