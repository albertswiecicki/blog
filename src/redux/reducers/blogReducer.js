const initialState = {
  posts: [],
};

const blogReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};

export default blogReducer;
