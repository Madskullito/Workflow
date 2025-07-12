// services/taskService.js
import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  getDocs,
  orderBy,
  serverTimestamp
} from 'firebase/firestore'
import firebaseConfig from '../firebase/firebaseConfig' // mismo comment que arriba

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export const addTask = async ({ title, description, collaboratorId }) => {
  const docRef = await addDoc(collection(db, 'tasks'), {
    title,
    description,
    collaboratorId,
    status: 'pendiente',
    createdAt: serverTimestamp()
  })
  return docRef.id
}

export const getTasksForUser = async collaboratorId => {
  const q = query(
    collection(db, 'tasks'),
    where('collaboratorId', '==', collaboratorId),
    orderBy('createdAt', 'desc')
  )
  const snap = await getDocs(q)
  return snap.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}
