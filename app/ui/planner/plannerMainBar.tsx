import Link from "next/link";
import icons from "../common/icons"
import ProgressBar from "../progress-bar";
import { getPlannerDayListFromFirestoreDB } from "@/app/lib/firebase/planner";
import { _getCurrentDateByNumber } from "@/app/lib/_utils/_getCurrentDateByNumber";

export default async function PlannerMainBar() {
    const { tasksIcon: { getIcon } } = icons;
    const TaskIcon = getIcon("large", 'absolute bottom-3 right-3 group-hover:scale-125 duration-150');
    const tasksList = await getPlannerDayListFromFirestoreDB(_getCurrentDateByNumber());
    const doneTask = tasksList.filter((task) => task.isDone);
    const progressValue = Math.trunc((doneTask.length / tasksList.length) * 100);

    return (
        <Link
            href="/planner"
            className="group relative inline-block col-span-3 row-span-3 bg-t-blue rounded-3xl p-5 text-white hover:ring-8 ring-offset-2 ring-t-blue ring-opacity-50 duration-150 active:scale-99"
        >
            <div className="flex justify-between">
                <h2 className="text-3xl font-medium">Today's plan:</h2>
                <ProgressBar progressValue={progressValue} />
            </div>

            {TaskIcon}

            <ul className="pl-5 mt-4 inline-flex flex-col gap-3 text-t-gray font-semibold overflow-hidden">
                {tasksList.splice(0, 5).map((task) => (
                    <li
                        key={task.id}
                        className="p-2 text-lg after:block after:h-[3px] after:w-36 after:bg-t-dark-text after:bg-opacity-50 after:rounded-2xl after:mt-1 hover:bg-white hover:bg-opacity-50 hover:rounded-2xl cursor-pointer all duration-150 hover:after:w-10"
                    >
                        <p className="">✍ {task.name}</p>
                        <p className="text-sm opacity-80">{task.desk}</p>
                    </li>
                ))}
                <p className="text-right">Click to see all</p>
            </ul>
        </Link>
    )
}