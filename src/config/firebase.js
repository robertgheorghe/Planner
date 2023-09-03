import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBkyOrCsIHLmKrfqhO2_2q59MYNWFQozoc",
  authDomain: "planner-e63c5.firebaseapp.com",
  projectId: "planner-e63c5",
  storageBucket: "planner-e63c5.appspot.com",
  messagingSenderId: "1088946222459",
  appId: "1:1088946222459:web:9c031615d69ca3e80db9de",
  measurementId: "G-0B77MMPTW8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const isLogged = onAuthStateChanged(auth, (user) => {
  if (user) {
    return true;
  } else {
    return false;
  }
});
