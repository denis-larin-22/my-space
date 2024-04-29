
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { ITaskItem } from "../types/planner-types";
import { postNewTaskToFirestoreDB } from "../firebase/planner";
import { _getIdWithDate } from "../_utils/_getId";

export async function createNewTask(formData: FormData) {
    'use server';
    const newTaskObj: ITaskItem = {
        id: _getIdWithDate(formData.get("date") as string),
        name: formData.get('name') as string,
        desk: formData.get('deskription') as string,
        date: formData.get("date") as string,
        isDone: false
    };
    // Post to the FirebaseDB
    postNewTaskToFirestoreDB(newTaskObj);
    // Cleare cashe tasks list
    revalidatePath('/planner');
    redirect('/planner');
}

export async function updateTask(editedTask: ITaskItem) {
    // Post to the FirebaseDB
    postNewTaskToFirestoreDB(editedTask);
    // Cleare cashe tasks list
    revalidatePath('/planner');
    redirect('/planner');
}
