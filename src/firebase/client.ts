import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBlTvcKxDVISGL_TOL_z_rkkm8v8Wn6ONI",
  authDomain: "dhakahealthclub-137e4.firebaseapp.com",
  databaseURL: "https://dhakahealthclub-137e4-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "dhakahealthclub-137e4",
  storageBucket: "dhakahealthclub-137e4.appspot.com",
  messagingSenderId: "56734104960",
  appId: "1:56734104960:web:389f2af3ff81eda264d565",
  measurementId: "G-JXFBSBGVXJ"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
