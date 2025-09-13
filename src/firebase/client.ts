import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBlTvcKxDVISGL_TOL_z_rkkm8v8Wn6ONI",
  authDomain: "dhakahealthclub-137e4.firebaseapp.com",
  projectId: "dhakahealthclub-137e4",
  storageBucket: "dhakahealthclub-137e4.appspot.com",
  messagingSenderId: "56734104960",
  appId: "1:56734104960:web:389f2af3ff81eda264d565",
  measurementId: "G-JXFBSBGVXJ"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
