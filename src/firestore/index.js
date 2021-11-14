import { db } from "../firebase/config";
import {
  getDoc,
  doc,
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

export const getUserData = async (uid) => {
  const docRef = doc(db, "users", uid);
  const userData = await getDoc(docRef)
    .then((data) => data.data())
    .catch((error) => {
      console.log("getDoc err", error);
    });
  return userData;
};

export const getPosts = async () => {
  const snapshot = await getDocs(collection(db, "posts"));
  return snapshot.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
};

export const uploadPost = async (post) => {
  // upload to firebase
  console.log(
    "can_be_accessed_by_id ",
    post.can_be_accessed_by_id === undefined ? true : post.can_be_accessed_by_id
  );
  const docRef = await addDoc(collection(db, "posts"), {
    title: post.title,
    imageUrl: post.imageUrl,
    imageAlt: post.imageUrl,
    body: post.body,
    createdAt: post.createdAt ? post.createdAt : serverTimestamp(), // only day, there is no sense to put hour, cuz we would need to deal with timezones ect
    updatedAt: null, //  null or date
    createdBy: post.createdBy ? post.createdBy : "Albert", // currently
    likes: [], // nicks of everybody who liked the post (only logins)
    favorites: [], // // nicks of everybody who favorited the post (only logins)
    anonymus_likes: 0, // counter of anonymous likes
    can_be_accessed_by_id:
      post.can_be_accessed_by_id === undefined
        ? true
        : post.can_be_accessed_by_id, // true / false (can be accessed by id)
    displayed_by_default:
      post.displayed_by_default === undefined
        ? true
        : post.displayed_by_default, // is displayed by default in the default blog section
    tags: post.tags ? post.tags : [], // tags to filter by
    comments: [], // comment ids
  });
  console.log("Document written with ID: ", docRef.id);
};
