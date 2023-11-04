import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBvBiumafqHh2e9WzrAgijLLsOe-4icAcc",
  authDomain: "climate-change-dashboard.firebaseapp.com",
  projectId: "climate-change-dashboard",
  storageBucket: "climate-change-dashboard.appspot.com",
  messagingSenderId: "907442675591",
  appId: "1:907442675591:web:23eaa1b8188fd75f867d22",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth (app);
