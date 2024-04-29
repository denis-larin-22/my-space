'use server'

import { revalidatePath } from "next/cache";
import { _getId } from "../_utils/_getId";
import { postReminderItemToFirestoreDB } from "../firebase/reminder";
import { IReminerItem } from "../types/planner-types";
import { redirect } from "next/navigation";

export async function createNewReminderITem(formData: FormData) {
    'use server';
    const newTaskObj: IReminerItem = {
        id: _getId(),
        text: formData.get('text') as string,
    };
    // Post to the FirebaseDB
    postReminderItemToFirestoreDB(newTaskObj);
    // Cleare cashe tasks list
    revalidatePath('/planner/reminder');
    redirect('/planner/reminder');
}