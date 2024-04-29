import ReminderList from "@/app/ui/reminder/reminderList";
import Link from "next/link";

export default function Reminder() {

    return (
        <section className="font-bold">
            <div className="bg-t-green p-5 mb-3 rounded-2xl text-white text-3xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Link href="/planner" className="w-10 h-10 rounded-full bg-white/50 text-t-gray/60 text-2xl flex items-center justify-center">🡨</Link>
                    <h2>Reminder</h2>
                </div>
                <Link
                    href="/planner/reminder/create-new-reminder"
                    className="w-16 h-16 rounded-full bg-white/50 text-t-gray/60 flex items-center justify-center ring-2 ring-offset-2 ring-t-green"
                >＋</Link>
            </div>

            <ReminderList />
        </section>
    )
} 