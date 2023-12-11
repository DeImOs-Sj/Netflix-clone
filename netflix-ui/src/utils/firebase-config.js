import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAqqwmuZ4tp_hTINNXLIBIDedbP3snDZo8",
  authDomain: "react-netflix-clone-db0a8.firebaseapp.com",
  projectId: "react-netflix-clone-db0a8",
  storageBucket: "react-netflix-clone-db0a8.appspot.com",
  messagingSenderId: "747700380273",
  appId: "1:747700380273:web:1525613706621fbfaf71d0",
  measurementId: "G-7WP1MDYKDR"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
