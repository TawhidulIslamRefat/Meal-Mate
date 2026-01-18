"use client";

import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  GoogleAuthProvider,
} from "firebase/auth";

import { AuthContext } from "./AuthContext";
import { app } from "../Firebase/Firebase.config";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const signIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const signInGoogle = () => signInWithPopup(auth, provider);

  const forgetPassword = (email) => sendPasswordResetEmail(auth, email);

  const logOut = async () => {
    document.cookie = "auth=; Max-Age=0; path=/";
    document.cookie = "user=; Max-Age=0; path=/";

    setUser(null);
    await signOut(auth);
  };

  const updateUser = (updatedData) =>
    updateProfile(auth.currentUser, updatedData);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        const cookieUser = document.cookie
          .split("; ")
          .find((row) => row.startsWith("user="));

        if (cookieUser) {
          setUser(JSON.parse(decodeURIComponent(cookieUser.split("=")[1])));
        } else {
          setUser(null);
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authData = {
    user,
    setUser,
    loading,
    createUser,
    signIn,
    signInGoogle,
    logOut,
    updateUser,
    forgetPassword,
  };

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;