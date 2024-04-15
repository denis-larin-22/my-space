import { ITaskItem } from "@/app/lib/types/planner-types";

interface IProps {
    task: ITaskItem
}

export default function TaskItem({ task }: IProps) {
    return (
        <>
            <p>✍ {task.name}</p>
            <p className="text-sm opacity-80">{task.desk}</p>
            {task.isDone && <p className="text-2xl absolute top-1 right-1">✔</p>}
        </>
    )
}