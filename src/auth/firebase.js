import { addDoc, collection, query, where, getDocs } from "firebase/firestore";
import {
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithPopup,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "react-toastify";
import { auth, db } from "../config/firebase";

const googleProvider = new GoogleAuthProvider();
const errorToast = (text) => toast.error(`${text}`);
const successToast = (text) => toast.success(`${text}`);

export const signUp = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      email,
      name,
      authProvider: "local",
      role: "user",
    });
    successToast("Sign Up Success");
  } catch (err) {
    throw err;
  }
};
export const signIn = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    throw err;
  }
};
export const signInWithGoogle = async () => {
  try {
    const res = await signInWithRedirect(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        authProvider: "google",
        email: user.email,
        role: "user",
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
export const logout = () => {
  signOut(auth);
};
