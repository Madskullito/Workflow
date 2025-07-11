import { db } from '../firebaseConfig';
import { collection, addDoc, query, where, getDocs, updateDoc, doc } from 'firebase/firestore';

const col = collection(db, 'tasks');

export const createTask = async (task) => addDoc(col, { ...task, status: 'pendiente', createdAt: new Date() });
export const getTasksByCollaborator = async (uid) => (await getDocs(query(col, where('collaboratorId','==',uid)))).docs.map(d => ({id:d.id,...d.data()}));
export const getAllTasks = async () => (await getDocs(col)).docs.map(d => ({id:d.id,...d.data()}));
export const assignTask = async (id, collab) => { await updateDoc(doc(db,'tasks',id), {collaboratorId:collab}); window.open(`https://wa.me/524434530832?text=Tienes+una+nueva+tarea+${id}`); };
