import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFoAxLfVccrrOYIhLvKTvDoUTQPJnQ1_c",
  authDomain: "adib-services.firebaseapp.com",
  projectId: "adib-services",
  storageBucket: "adib-services.firebasestorage.app",
  messagingSenderId: "684036284937",
  appId: "1:684036284937:web:09ffd6a657c224544c8ed8",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);

export const db = getFirestore(app);

export const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});