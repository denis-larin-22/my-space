import Link from "next/link";
import { _getCurrentDate } from "../lib/_utils";
import { TaskListArray } from "../lib/types/planner-types";
import TaskList from "../ui/planner/taskList";
import ProgressBar from "../ui/progress-bar";

export default function Planner() {
    const date = _getCurrentDate();
    const tasks: TaskListArray = [{ id: '24324', name: 'Купить продукты', desk: 'Молоко, хлеб, мясо, яйца', date: '15.04.2024', isDone: false }, { id: '453534', name: 'Работа', desk: '', date: '15.04.2024', isDone: false }, { id: '456756634', name: 'Проэкт', desk: 'пофиксить баг с окном', date: '15.04.2024', isDone: true }, { id: '54678', name: 'Приготовить', desk: 'потушить мясо', date: '15.04.2024', isDone: false }]; //PROPS
    const undoneTaskCount = tasks.filter((task) => !task.isDone).length

    return (
        <section className="relative">
            <div className="bg-t-blue p-5 rounded-2xl text-white flex gap-4">
                {/* <p className="inline-flex items-center justify-center w-10 h-10 bg-t-blue rounded-full"></p> */}
                <div className="">
                    <h2 className="text-3xl font-bold">Planner</h2>
                    <p className="text-sm font-semibold text-t-gray">{date}</p>
                </div>
                <Link
                    href="/planner/create-new-task"
                    className="w-10 h-10 rounded-full bg-white text-t-gray/60 text-3xl font-bold flex items-center justify-center ring-2 ring-t-dark-text/90"
                >＋</Link>
            </div>
            <div className="p-3 flex items-center gap-7 text-t-gray font-semibold">
                <div className="p-2 ring-2 ring-t-blue rounded-2xl bg-t-blue/50">
                    <p className="">Total tasks: 4</p>
                    <p className="text-3xl">Undone: {undoneTaskCount}</p>
                </div>
                <ProgressBar progressValue={77} theme="blue" />
            </div>

            <TaskList taskList={tasks} />
        </section>
    )
}