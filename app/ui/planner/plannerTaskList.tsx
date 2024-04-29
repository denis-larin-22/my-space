import PlannerTaskItem from "./plannerTaskItem";
import { _getCurrentDateByNumber } from "@/app/lib/_utils/_getCurrentDateByNumber";
import ProgressBar from "../progress-bar";
import Link from "next/link";
import { ITaskItem } from "@/app/lib/types/planner-types";

interface IProps {
    taskList: ITaskItem[] | [] | 'loading';
}

export default function PlannerTaskList({ taskList }: IProps) {
    if (taskList === 'loading') {
        return (
            <div className="w-1/2 h-full flex flex-row gap-2">
                <div className="w-4 h-4 rounded-full bg-t-blue animate-bounce [animation-delay:.7s]"></div>
                <div className="w-4 h-4 rounded-full bg-t-blue animate-bounce [animation-delay:.3s]"></div>
                <div className="w-4 h-4 rounded-full bg-t-blue animate-bounce [animation-delay:.7s]"></div>
            </div>
        )
    } else if (taskList.length === 0) {
        return (
            <div className="p-2 mt-3 ring-2 ring-t-blue rounded-2xl bg-t-blue/50 flex items-center gap-5">
                <Link
                    href="/planner/create-new-task"
                    className="w-16 h-16 rounded-full bg-t-blue/50 text-t-gray/60 text-3xl font-bold flex items-center justify-center ring-2 ring-offset-2 ring-t-blue"
                >＋</Link>
                <div className="">
                    <p className="">Total tasks: 0</p>
                    <p className="text-3xl">There is no task yet</p>
                </div>
            </div>
        )
    } else {
        const doneTask = taskList.filter((task) => task.isDone);
        const undoneTask = taskList.filter((task) => !task.isDone);
        const progressValue = Math.trunc((doneTask.length / taskList.length) * 100);

        return (
            <>
                <div className="bg-white flex items-center gap-7 text-t-gray font-semibold">
                    <Link
                        href="/planner/create-new-task"
                        className="w-16 h-16 rounded-full bg-t-blue/50 text-t-gray/60 text-3xl font-bold flex items-center justify-center ring-2 ring-offset-2 ring-t-blue"
                    >＋</Link>
                    <div className="p-2 ring-2 ring-t-blue rounded-2xl bg-t-blue/50">
                        <p>Total tasks: {taskList.length}</p>
                        <p className="text-3xl">Undone: {undoneTask.length}</p>
                    </div>
                    <ProgressBar progressValue={progressValue} theme="blue" />
                </div>

                <div className="p-5 pt-3 flex flex-col gap-4">
                    {taskList.map((task) => (
                        <Link
                            key={task.id}
                            href={`/planner/${task.id}/task-item`}
                            className={`relative h-fit p-2 text-t-dark-text ${task.isDone ? 'bg-t-blue/50 brightness-75' : 'bg-t-blue'} rounded-2xl border-2 ${task.isDone ? 'border-t-blue' : 'border-transparent'} hover:ring-2 ring-offset-2 ring-t-blue duration-150 cursor-pointer`}
                        >
                            <PlannerTaskItem task={task} />
                        </Link>
                    ))}
                </div>
            </>
        )
    }


}