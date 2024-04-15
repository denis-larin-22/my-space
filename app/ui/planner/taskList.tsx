import { TaskListArray } from "@/app/lib/types/planner-types";
import TaskItem from "./taskItem";

interface IProps {
    taskList: TaskListArray;
}

export default function TaskList({ taskList }: IProps) {

    return (
        <ul className="columns-4">
            {taskList.map((task) => (
                <li
                    key={task.id}
                    className={`relative p-2 ${task.isDone ? 'bg-t-blue/50 brightness-75' : 'bg-t-blue'} rounded-2xl border-2 ${task.isDone ? 'border-t-blue' : 'border-transparent'} hover:scale-102 duration-150 cursor-pointer`}
                >
                    <TaskItem task={task} />
                </li>
            ))}
        </ul>
    )
}