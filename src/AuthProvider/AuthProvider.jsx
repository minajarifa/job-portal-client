import { Children, createContext } from "react";

export default function Provider({children}) {
  const AuthContext = createContext(null);
  return (
    <AuthContext.Provider>
      {children}
    </AuthContext.Provider>
  );
}
