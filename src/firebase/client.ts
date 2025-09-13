
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    projectId: "dhakahealthclub-137e4",
    appId: "1:56734104960:web:389f2af3ff81eda264d565",
    databaseURL: "https://dhakahealthclub-137e4-default-rtdb.asia-southeast1.firebasedatabase.app",
    storageBucket: "dhakahealthclub-137e4.firebasestorage.app",
    apiKey: "AIzaSyBlTvcKxDVISGL_TOL_z_rkkm8v8Wn6ONI",
    authDomain: "dhakahealthclub-137e4.firebaseapp.com",
    messagingSenderId: "56734104960",
    measurementId: "G-JXFBSBGVXJ",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { app, auth, firestore };
