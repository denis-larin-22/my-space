import { TaskListArray } from "@/app/lib/types/planner-types";
import TaskItem from "./taskItem";

export default function TaskList() {
    const tasks: TaskListArray = [{ id: '24324', name: 'Купить продукты', desk: 'Молоко, хлеб, мясо, яйца', isDone: false }, { id: '453534', name: 'Работа', desk: '', isDone: false }, { id: '456756634', name: 'Проэкт', desk: 'пофиксить баг с окном', isDone: true }, { id: '54678', name: 'Приготовить', desk: 'потушить мясо', isDone: false }]; //PROPS

    return (
        <ul className="columns-4">
            {tasks.map((task) => (
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