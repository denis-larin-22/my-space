import { collection, deleteDoc, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { IReminerItem, ITaskItem, ReminderListArray } from "../types/planner-types";
import { db } from "../firebase/firebase-config";


// get reminder list by date
export const getReminderListFromFirestoreDB = async (): Promise<ReminderListArray> => {
    try {
        const tasksCollectionRef = collection(db, 'reminder');
        const data = await getDocs(tasksCollectionRef);

        const reminderList: Array<IReminerItem> = data.docs.map((doc) => ({
            id: doc.id,
            text: doc.data().text
        }));

        return reminderList;
    } catch (error) {
        console.error("Error when retrieving data from DB:", error);
        throw error;
    }
};

// get reminder item by id
export const getReminderFromFirestoreDB = async (id: string): Promise<IReminerItem> => {
    try {
        const docRef = doc(db, "reminder", id);
        const docSnap = await getDoc(docRef);
        return docSnap.data() as IReminerItem;
    } catch (error) {
        console.error("Error when retrieving data from storage:", error);
        throw error;
    }
};

// post new reminder item
export const postReminderItemToFirestoreDB = async (reminderObj: IReminerItem) => {
    try {
        const result = await setDoc(doc(db, "reminder", reminderObj.id), reminderObj);
        console.log("New reminder item successfully added to Firestore", result);
    } catch (error: any) {
        console.error("Error adding new task to FirestoreDB:", error.message);
        throw error;
    }
}

// delete reminder item
export const deleteReminderItemFromFirestoreDB = async (id: string) => {
    const userDoc = doc(db, "reminder", id)
    await deleteDoc(userDoc);
}
