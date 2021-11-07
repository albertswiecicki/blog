import { db } from "../firebase/config";
import { getDoc, doc, collection, getDocs } from "firebase/firestore";

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

// export const uploadPost = async (post) => {
//   // upload to firebase
// };
