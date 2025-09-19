// lib/firebase.ts
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDsCPyknRA3zxEGaSn1k0axHWLgOmWEREU",
  authDomain: "ruasthon-4d7e1.firebaseapp.com",
  projectId: "ruasthon-4d7e1",
  storageBucket: "ruasthon-4d7e1.firebasestorage.app",
  messagingSenderId: "957356677306",
  appId: "1:957356677306:web:2df720aa707972c609ca83",
  measurementId: "G-S7LR3ZZ68W"
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
// If you want to use analytics in a browser-only context, uncomment below:
// import { getAnalytics } from 'firebase/analytics';
// const analytics = typeof window !== 'undefined' ? getAnalytics(app) : undefined;

export const db = getFirestore(app);
export const auth = getAuth(app);
