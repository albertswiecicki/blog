import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "@firebase/auth";
import { auth } from "../../firebase/config";
import hashIt from "../Hash";
import { doc, setDoc } from "@firebase/firestore";
import { db } from "../../firebase/config";

export const logout = async () => {
  await signOut(auth);
};

export const loginWithEmail = async (loginEmail, loginPassword) => {
  const hashedLoginPassword = hashIt(loginPassword);
  try {
    await signInWithEmailAndPassword(auth, loginEmail, hashedLoginPassword);
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
    const userData = {
      login: registerLogin,
    };
    const userDoc = doc(db, `users/${user.uid}`);
    setDoc(userDoc, userData);
  } catch (error) {
    console.log(error.message);
  }
};
