'use client';

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAygHBcL5hH00k0MUDwmaVWfcx2DksovWg",
  authDomain: "meal-mate-login.firebaseapp.com",
  projectId:"meal-mate-login",
  storageBucket: "meal-mate-login.appspot.com",
  messagingSenderId:"177612173997",
  appId: "1:177612173997:web:70490a78bf0e6738a70c24",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = typeof window !== "undefined" ? getAuth(app) : null;

export { app, auth };