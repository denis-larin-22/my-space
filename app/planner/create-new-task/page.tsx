import NewTaskForm from "@/app/ui/planner/newTaskForm";
import Link from "next/link";

export default function NewTask() {
    return (
        <div className="">
            <div className="bg-t-blue p-5 rounded-2xl text-white flex items-center gap-4">
                <Link href="/planner" className="w-10 h-10 rounded-full bg-white/50 text-t-gray/60 text-2xl flex items-center justify-center">🡨</Link>
                <h2 className="text-3xl font-bold">Create new task:</h2>
            </div>

            <NewTaskForm />
        </div>
    )
}