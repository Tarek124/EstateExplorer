/* eslint-disable react/prop-types */
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth/cordova";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const MyContext = createContext();

export default function AppContext({ children }) {
  const [user, setUser] = useState(null);
  const [homeData, setHomeData] = useState({});
  const [loading, setLoading] = useState(true);
  const [dataUpdated, setDataUpdated] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  useEffect(() => {
    fetch("/fake.json")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setHomeData(data);
      })
      .catch((err) => console.log(err));

    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unSubscribe();
  }, [dataUpdated]);
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // signIn
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    signOut(auth);
  };
  // updateProfile
  const updateUser = (userName, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: userName,
      photoURL: photoURL,
    });
  };

  const appData = {
    homeData,
    loading,
    dataUpdated,
    googleLogin,
    githubLogin,
    createUser,
    user,
    logOut,
    updateUser,
    logIn,
    setDataUpdated,
  };
  return <MyContext.Provider value={appData}>{children}</MyContext.Provider>;
}
