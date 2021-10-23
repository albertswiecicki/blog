import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "@firebase/auth";
import { auth } from "../../firebase/config";
import hashIt from "../Hash";

export const logout = async () => {
  await signOut(auth);
};

export const login = async (loginEmail, loginPassword) => {
  const hashedLoginPassword = hashIt(loginPassword);
  try {
    const user = await signInWithEmailAndPassword(
      auth,
      loginEmail,
      hashedLoginPassword
    );
    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
};

export const register = async (registerEmail, registerPassword) => {
  const hashedRegisterPassword = hashIt(registerPassword);
  try {
    const user = await createUserWithEmailAndPassword(
      auth,
      registerEmail,
      hashedRegisterPassword
    );
    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
};
