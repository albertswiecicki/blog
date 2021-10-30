import { db } from "../firebase/config";
import { getDoc, doc } from "firebase/firestore";

export const getUserData = async (uid) => {
  const docRef = doc(db, "users", uid);
  const userData = await getDoc(docRef)
    .then((data) => data.data())
    .catch((error) => {
      console.log("getDoc err", error);
    });
  return userData;
};
