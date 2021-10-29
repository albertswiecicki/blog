import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "@firebase/auth";
import { auth } from "../../firebase/config";
import hashIt from "../Hash";
import { doc, setDoc, getDoc } from "@firebase/firestore";
import { db } from "../../firebase/config";
import { onAuthStateChanged } from "@firebase/auth";
import { useDispatch } from "react-redux";
import { authActionTypes } from "../../redux/actions/actionTypes";
// import Button from "../../atoms/Button";
import Button from "../../components/atoms/Button";

import { useSelector } from "react-redux";

export const logout = async () => {
  await signOut(auth);
};

const getUserData = (uid) => {
  // we will somehow connect this part with the store
};

// it should be somewhere and call some action to reducer

const UserPanel = () => {
  const dispatch = useDispatch();
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser && Object.keys(currentUser).length !== 0) {
      dispatch({
        type: authActionTypes.SET_CURRENT_USER,
        payload: currentUser,
      });
      console.log("onAuthStateCange log");
    }

    // here we could just add currentUser.nick = getUserData(collestion).data[nick]
    // setUser(currentUser);
    console.log(currentUser);
  });

  const user = useSelector(({ auth }) => auth.user);
  if (user && Object.keys(user).length !== 0) {
    return (
      <>
        Hey {user.email}
        <Button onClickFn={logout}>Logout</Button>
      </>
    );
  }
  return <Button> To do go to login page</Button>;
};
export default UserPanel;

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
