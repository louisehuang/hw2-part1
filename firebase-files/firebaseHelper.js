import { collection, addDoc, doc, deleteDoc, setDoc } from "firebase/firestore";
import { database } from "./firebaseSetup";

export async function addToDB(activityData) {
  try {
    const docRef = await addDoc(collection(database, "activities"),activityData);
  } catch (err) {
    console.log(err.code);
  }
}

export async function deleteFromDB(id) {
  try {
    await deleteDoc(doc(database, "activities", id));
  } catch (err) {
    console.log(err);
  }
}

export async function updateInDB(id, activityData) {
  try {
    await setDoc(doc(database, "activities", id), activityData);
  } catch (err) {
    console.log(err);
  }
}