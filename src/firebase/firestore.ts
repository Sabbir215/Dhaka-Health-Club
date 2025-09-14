import { doc, setDoc } from "firebase/firestore";
import { db } from "./client";

export const saveUserData = async (userId, userData) => {
  await setDoc(doc(db, "users", userId), userData);
};
