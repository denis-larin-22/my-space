import { getReminderListFromFirestoreDB } from "@/app/lib/firebase/reminder";
import { ReminderListArray } from "@/app/lib/types/planner-types";
import Link from "next/link";

export default async function ReminderList() {
    const reminderList: ReminderListArray = await getReminderListFromFirestoreDB();
    console.log(reminderList);


    return (
        <div className="columns-4">
            {reminderList.map((reminder) => (
                <Link
                    href={`/planner/reminder/${reminder.id}/reminder-item`}
                    key={reminder.id}
                    className="break-inside-avoid inline-block p-5 mb-3 bg-t-green/50 border-2 border-t-green rounded-2xl text-xl hover:ring-2 ring-t-green ring-offset-2 cursor-pointer all duration-150"
                >
                    ☝ {reminder.text}
                </Link>
            ))}
        </div>
    )
}