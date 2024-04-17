import TaskItem from "./taskItem";
import { _getCurrentDateByNumber } from "@/app/lib/_utils/_getCurrentDateByNumber";
import { getPlannerDayListFromFirestoreDB } from "@/app/lib/firebase/planner";
import ProgressBar from "../progress-bar";
import Link from "next/link";

export default async function TaskList() {
    const date = _getCurrentDateByNumber();
    const tasksList = await getPlannerDayListFromFirestoreDB(date);

    // Работа с определением даты дня и запроса задач на этот день а ткже работа с зранилизем LS

    if (tasksList.length === 0) {
        return (
            <div className="p-2 mt-3 ring-2 ring-t-blue rounded-2xl bg-t-blue/50">
                <p className="">Total tasks: 0</p>
                <p className="text-3xl">There is no task yet</p>
            </div>
        )
    } else {
        const doneTask = tasksList.filter((task) => task.isDone);
        const undoneTask = tasksList.filter((task) => !task.isDone);
        const progressValue = Math.trunc((doneTask.length / tasksList.length) * 100);

        return (
            <>
                <div className="bg-white flex items-center gap-7 text-t-gray font-semibold">
                    <Link
                        href="/planner/create-new-task"
                        className="w-16 h-16 rounded-full bg-t-blue/50 text-t-gray/60 text-3xl font-bold flex items-center justify-center ring-2 ring-offset-2 ring-t-blue"
                    >＋</Link>
                    <div className="p-2 ring-2 ring-t-blue rounded-2xl bg-t-blue/50">
                        <p>Total tasks: {tasksList.length}</p>
                        <p className="text-3xl">Undone: {undoneTask.length}</p>
                    </div>
                    <ProgressBar progressValue={progressValue} theme="blue" />
                </div>

                <ul className="p-5 pt-3 flex flex-col gap-4">
                    {tasksList.map((task) => (
                        <li
                            key={task.id}
                            className={`relative h-fit p-2 text-t-dark-text ${task.isDone ? 'bg-t-blue/50 brightness-75' : 'bg-t-blue'} rounded-2xl border-2 ${task.isDone ? 'border-t-blue' : 'border-transparent'} hover:ring-2 ring-offset-2 ring-t-blue duration-150 cursor-pointer`}
                        >
                            <TaskItem task={task} />
                        </li>
                    ))}
                </ul>
            </>
        )
    }


}