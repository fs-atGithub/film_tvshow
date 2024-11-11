import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { auth } from "../services/firebase";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }
  function signInWithGithub() {
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
  }
  function logout() {
    return signOut(auth);
  }

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });
  }, []);

  // Prop validation
  AuthProvider.propTypes = {
  children: PropTypes.node.isRequired, // Ensures children is a React node and is required
};

  return (
    <AuthContext.Provider value={{ user, isLoading, signInWithGoogle,signInWithGithub, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
