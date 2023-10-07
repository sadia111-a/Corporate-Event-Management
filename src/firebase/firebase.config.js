import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAc4svPvp0pJ2xUrp6MkLHoxOZa1tDaEOI",
  authDomain: "event-management-a326e.firebaseapp.com",
  projectId: "event-management-a326e",
  storageBucket: "event-management-a326e.appspot.com",
  messagingSenderId: "473014245267",
  appId: "1:473014245267:web:e513258d131e7e11b03a66",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export default app;
export const auth = getAuth(app);
