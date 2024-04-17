'use server';

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { ITaskItem } from "../types/planner-types";
import { _getId } from "../_utils/_getId";
import { postNewTaskToFirestoreDB } from "../firebase/planner";

export async function createNewTask(formData: FormData) {
    const newTaskObj: ITaskItem = {
        id: _getId(),
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