import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDuMprnWiLuRmZm9ONIIkXyV3NGyzKnWD0",
  authDomain: "job-management-app-6b0dc.firebaseapp.com",
  projectId: "job-management-app-6b0dc",
  storageBucket: "job-management-app-6b0dc.appspot.com",
  messagingSenderId: "17988605728",
  appId: "1:17988605728:web:a639f5eb10cd529d7e6945",
  measurementId: "G-1280G96DKX"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);