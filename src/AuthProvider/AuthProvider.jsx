import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
export default function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  // create user by register  
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signin=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password);
  }
  const userInfo = {
    user,
    loading,
    createUser,
    signin,
  };
  // create user

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
}
