import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "@firebase/auth";
import { auth } from "../../firebase/config";
import hashIt from "../Hash";
import { doc, setDoc, getDoc } from "@firebase/firestore";
import { db } from "../../firebase/config";

export const logout = async () => {
  await signOut(auth);
};

const getUserData = (uid) => {
  // we will somehow connect this part with the store
};

export const loginWithEmail = async (loginEmail, loginPassword) => {
  const hashedLoginPassword = hashIt(loginPassword);
  try {
    const { user } = await signInWithEmailAndPassword(
      auth,
      loginEmail,
      hashedLoginPassword
    );

    getDoc(db, `users/${user.uid}`)
      .then((userData) => {
        console.log("user data", userData);
      })
      .catch((error) => {
        console.log("getDoc err", error);
      });
  } catch (error) {
    console.log(error.message);
  }
};

export const register = async (
  registerEmail,
  registerPassword,
  registerLogin
) => {
  const hashedRegisterPassword = hashIt(registerPassword);
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      registerEmail,
      hashedRegisterPassword
    );
    console.log(user);
    const userData = {
      login: registerLogin,
    };
    const userDoc = doc(db, `users/${user.uid}`);
    setDoc(userDoc, userData);
    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
};
