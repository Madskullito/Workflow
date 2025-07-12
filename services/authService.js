// services/authService.js
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from 'firebase/auth'
import firebaseConfig from '../firebase/firebaseConfig' // ajusta si tu config está en otra ruta

// Inicializa Firebase (asegúrate de tener firebaseConfig exportado)
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

export const login = (email, password) =>
  signInWithEmailAndPassword(auth, email, password)

export const register = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password)

export const loginWithGoogle = () =>
  signInWithPopup(auth, googleProvider)

export const logout = () => signOut(auth)
