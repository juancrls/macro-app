import React, { useState, useEffect, useContext } from 'react';
import { auth } from '../firebase.js';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);

  async function login(email, password) {
    try {
      let res = await auth.signInWithEmailAndPassword(email, password)
      return res
    } catch(err) {
      return err
    }
  }

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      setCurrentUser(user)
    })
  }, [])

  const value = {
    currentUser,
    login
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}