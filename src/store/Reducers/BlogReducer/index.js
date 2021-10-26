// dummy post template

const dummyPost = {
  title: "title",
  body: "some body text here",
  image: "someurlhere",
};

// what store shoud contain
const initialStore = {
  user: {}, // or nick
  favorites: {}, // is should be cleared
  posts: {},
};
// we should keep every post (without images ofc.)
// posts should never be deleted, and should be stored in localStorage (what if I update some post?)
