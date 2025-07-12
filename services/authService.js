// services/authService.js
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../lib/firebase";    // Ajusta esta ruta si tu firebase init está en otro sitio

const auth = getAuth(app);

/**
 * Inicia sesión con email y contraseña.
 * @returns Promise<UserCredential>
 */
export function loginWithEmail(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

/**
 * Registra un usuario nuevo con email y contraseña.
 * @returns Promise<UserCredential>
 */
export function registerWithEmail(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

/**
 * Cierra la sesión actual.
 */
export function logout() {
  return signOut(auth);
}
