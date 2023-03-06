import React, { useState, useEffect, useContext } from 'react';
import { auth } from '../firebase.js';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState([]);
  const [loading, setLoading] = useState(true);

  async function login(email, password) {
    try {
      let res = await auth.signInWithEmailAndPassword(email, password)
      return res
    } catch(err) {
      throw err.code
    }
  }

  async function signup(email, password) {
    try {
      let res = await auth.createUserWithEmailAndPassword(email, password)
      return res
    } catch(err) {
      throw err.code
    }
  }

    async function logout() {
      return auth.signOut();
    }

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if(!user) {
        setCurrentUser(null)
      } else {
        setCurrentUser(true)
      }
      setLoading(false)
    })
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}