import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import { app } from "./client";
import type { User } from 'firebase/auth';

const auth = getAuth(app);

export const signUp = (email: string, password: string): Promise<any> => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const logIn = (email: string, password: string): Promise<any> => {
  return signInWithEmailAndPassword(auth, email, password);
}

export const logOut = (): Promise<void> => {
  return signOut(auth);
};

export const onAuthStateChangedListener = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};