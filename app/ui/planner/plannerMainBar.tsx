import icons from "../common/icons"
import ProgressBar from "../progress-bar";

export default function PlannerMainBar() {
    const { tasksIcon: { getIcon } } = icons;
    const TaskIcon = getIcon("large", 'absolute bottom-3 right-3 group-hover:scale-125 duration-150');
    const progress = 30; //PROPS
    const tasks = [{ id: '24324', name: 'Купить продукты', desk: 'Молоко, хлеб, мясо, яйца' }, { id: '453534', name: 'Работа', desk: '' }, { id: '456756634', name: 'Проэкт', desk: 'пофиксить баг с окном' }, { id: '54678', name: 'Приготовить', desk: 'потушить мясо' }]; //PROPS

    return (
        <div className="group relative col-span-3 row-span-3 bg-t-blue rounded-3xl p-5 sca text-white hover:ring-8 ring-offset-2 ring-t-blue ring-opacity-50 duration-150 active:scale-99">
            <div className="flex justify-between">
                <h2 className="text-3xl font-medium">Today's plan:</h2>
                <ProgressBar progressValue={progress} />
            </div>

            {TaskIcon}

            <ul className="pl-5 mt-4 inline-flex flex-col gap-3 text-t-gray font-semibold">
                {tasks.map((task) => (
                    <li
                        key={task.id}
                        className="p-2 text-lg after:block after:h-[3px] after:w-36 after:bg-t-dark-text after:bg-opacity-50 after:rounded-2xl after:mt-1 hover:bg-white hover:bg-opacity-50 hover:rounded-2xl cursor-pointer all duration-150 hover:pl-3 hover:after:w-10"
                    >
                        <p className="">✍ {task.name}</p>
                        <p className="text-sm opacity-80">{task.desk}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}