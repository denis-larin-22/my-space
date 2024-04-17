import { _getCurrentDateByNumber } from "@/app/lib/_utils/_getCurrentDateByNumber";
import { _getId } from "@/app/lib/_utils/_getId";
import { createNewTask } from "@/app/lib/crud/planner";


export default function NewTaskForm() {
    const inputsStyles = "p-3 bg-t-blue/30 focus:bg-t-blue/50 ring-2 ring-t-blue ring-offset-2 focus:ring-0 focus:outline-t-blue duration-150 rounded-2xl";

    return (
        <form action={createNewTask} className="relative text-t-dark-text text-xl w-10/12 flex flex-col gap-4 mt-4">
            <input
                name="name"
                type="text"
                className={`w-full ${inputsStyles}`}
                placeholder="Task title"
                required
            />
            <textarea
                name="deskription"
                cols={30}
                rows={10}
                className={`w-full max-h-80 ${inputsStyles}`}
                placeholder="Text"
            ></textarea>
            <div className="flex justify-between">
                <input
                    name="date"
                    type="date"
                    required
                    className={`max-w-56 text-t-dark-text/50 focus:text-t-dark-text text-base ${inputsStyles}`}
                />
                <button
                    type="submit"
                    className={"bg-t-blue hover:bg-t-blue/50 hover:text-t-dark-text border-2 border-t-blue rounded-2xl text-white py-3 px-5 duration-150 active:scale-95"}
                >
                    Save
                </button>
            </div>
        </form>
    )
};