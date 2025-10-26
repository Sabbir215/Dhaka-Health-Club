import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut,
  onAuthStateChanged,
  updateProfile,
  updatePassword
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { app } from "./client";
import type { User } from 'firebase/auth';

const auth = getAuth(app);
const db = getFirestore(app);

// Extend the signUp function to accept more user details including a photoURL
export const signUp = async (email: string, password: string, fullName: string, phone: string, dob: string, address: string, photoURL: string | null): Promise<any> => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  // Prepare profile data
  const profileData: { displayName: string; photoURL?: string } = { 
    displayName: fullName 
  };
  if (photoURL) {
    profileData.photoURL = photoURL;
  }

  // Update the user's profile in Firebase Auth
  await updateProfile(user, profileData);

  // Now, create a document in the 'users' collection in Firestore
  const userDocRef = doc(db, "users", user.uid);
  await setDoc(userDocRef, {
    fullName,
    email,
    phone,
    dob,
    address,
    photoURL: photoURL ?? null, // Save the photoURL to Firestore
    createdAt: new Date()
  });

  return userCredential;
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

export const updateUserProfile = async (user: User, data: { displayName?: string; password?: string }) => {
  const promises = [];
  if (data.displayName) {
    promises.push(updateProfile(user, { displayName: data.displayName }));
  }
  if (data.password) {
    promises.push(updatePassword(user, data.password));
  }
  await Promise.all(promises);
};