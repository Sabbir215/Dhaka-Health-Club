import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./client";

export const uploadProfilePicture = async (file, userId) => {
  const storageRef = ref(storage, `profile-pictures/${userId}`);
  await uploadBytes(storageRef, file);
  return await getDownloadURL(storageRef);
};
