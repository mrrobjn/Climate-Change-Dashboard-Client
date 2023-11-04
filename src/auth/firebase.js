import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection, query, where, getDocs } from "firebase/firestore";
import { getAuth ,GoogleAuthProvider, sendPasswordResetEmail, signInWithPopup, signOut } from "firebase/auth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getStorage } from 'firebase/storage'
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyBvBiumafqHh2e9WzrAgijLLsOe-4icAcc",
  authDomain: "climate-change-dashboard.firebaseapp.com",
  projectId: "climate-change-dashboard",
  storageBucket: "climate-change-dashboard.appspot.com",
  messagingSenderId: "907442675591",
  appId: "1:907442675591:web:23eaa1b8188fd75f867d22"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
  export const storage = getStorage(app)
  export const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const errorToast = (text) => toast.error(`${text}`);
  const successToast = (text) => toast.success(`${text}`);

// Dang Nhap
  export const signUp = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        email,
        name,
        authProvider: "local",
        role: "user"
      });
      successToast("Đăng ký thành công")
    } catch (err) {
      errorToast(err.message);
    }
  }
  export const signIn = async (auth,email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      errorToast(err.message);
    }
  };
  export const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      const user = res.user;
      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      const docs = await getDocs(q);
      if (docs.docs.length === 0) {
        await addDoc(collection(db, "users"), {
          uid: user.uid,
          authProvider: "google",
          email: user.email,
          role:"user",
        });
      }
    } catch (err) {
      errorToast(err.message);
    }
  };
  export const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      successToast("Password reset link sent!");
    } catch (err) {
      console.error(err);
      errorToast(err.message);
    }
  };
  export const logout = (auth) => {
    signOut(auth);
  };
export { app };
