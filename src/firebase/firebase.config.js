import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4I7kpx0cj_xpCilnJuC7rKw_kBqpgzO0",
  authDomain: "job-portal-coffee.firebaseapp.com",
  projectId: "job-portal-coffee",
  storageBucket: "job-portal-coffee.firebasestorage.app",
  messagingSenderId: "1080075702743",
  appId: "1:1080075702743:web:13748a0aa0c62ea7103b92",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
