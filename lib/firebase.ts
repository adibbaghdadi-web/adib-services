import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFoAxLfVccrrOYIhLvKTvDoUTQPJnQ1_c",
  authDomain: "adib-services.firebaseapp.com",
  projectId: "adib-services",
  storageBucket: "adib-services.firebasestorage.app",
  messagingSenderId: "684036284937",
  appId: "1:684036284937:web:09ffd6a657c224544c8ed8",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };