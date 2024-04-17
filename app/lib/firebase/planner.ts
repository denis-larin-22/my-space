import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { ITaskItem } from "../types/planner-types";


// get task list by date
export const getPlannerDayListFromFirestoreDB = async (date: string): Promise<Array<ITaskItem>> => {
    try {
        const tasksCollectionRef = collection(db, date);
        const data = await getDocs(tasksCollectionRef);

        const tasksList: Array<ITaskItem> = data.docs.map((doc) => ({
            id: doc.data().id,
            name: doc.data().name,
            desk: doc.data().desk,
            date: doc.data().date,
            isDone: doc.data().isDone
        }));

        return tasksList;
    } catch (error) {
        console.error("Error when retrieving data from DB:", error);
        throw error;
    }
}

// post new task
export const postNewTaskToFirestoreDB = async (taskObj: ITaskItem) => {
    try {
        const result = await setDoc(doc(db, taskObj.date, taskObj.id), taskObj);
        console.log("New task successfully added to Firestore", result);
    } catch (error: any) {
        console.error("Error adding new task to FirestoreDB:", error.message);
        throw error;
    }
}
