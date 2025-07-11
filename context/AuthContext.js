import { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from '../firebaseConfig';
import { onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const ref = doc(db, 'users', currentUser.uid);
        const snap = await getDoc(ref);
        if (snap.exists()) setRole(snap.data().role);
      } else {
        setUser(null);
        setRole(null);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const signup = async (email, password) => {
    const { user: u } = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, 'users', u.uid), { email: u.email, role: 'cliente' });
  };

  const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const { user: u } = await signInWithPopup(auth, provider);
    const ref = doc(db, 'users', u.uid);
    if (!(await getDoc(ref)).exists()) {
      await setDoc(ref, { email: u.email, role: 'cliente' });
    }
  };
  const logout = () => signOut(auth);

  return <AuthContext.Provider value={{ user, role, loading, signup, login, loginWithGoogle, logout }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
