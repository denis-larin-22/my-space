import { ITaskItem } from "@/app/lib/types/planner-types";

interface IProps {
    task: ITaskItem
}

export default function PlannerTaskItem({ task }: IProps) {
    return (
        <>
            <p className="text-lg font-bold border-b-2 border-t-gray/50 pb-2 mb-2">✍ {task.name}</p>
            <p className="text-base font-semibold opacity-80">{task.desk}</p>
            {task.isDone && <p className="text-2xl absolute top-1 right-1">✔</p>}
        </>
    )
}