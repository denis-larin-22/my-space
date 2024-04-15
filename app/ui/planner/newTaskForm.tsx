'use client'

import { _getCurrentDateByNumber } from "@/app/lib/_utils/_getCurrentDateByNumber";
import { _getId } from "@/app/lib/_utils/_getId";
import { ITaskItem } from "@/app/lib/types/planner-types";

export default function NewTaskForm() {
    const inputsStyles = "p-3 bg-t-blue/30 focus:bg-t-blue/50 ring-2 ring-t-blue ring-offset-2 focus:ring-0 focus:outline-t-blue duration-150 rounded-2xl";

    const initInputsState: ITaskItem = {
        id: _getId(),
        name: '',
        desk: '',
        isDone: false,
        date: _getCurrentDateByNumber()
    };

    return (
        <form className="text-t-dark-text text-xl w-10/12 flex flex-col gap-4 mt-4">
            <input
                type="text"
                className={`w-full ${inputsStyles}`}
                placeholder="Task title"
                value={initInputsState.name}
            />
            <textarea
                name="deskription"
                cols={30}
                rows={10}
                className={`w-full max-h-80 ${inputsStyles}`}
                placeholder="Text"
                value={initInputsState.desk}
            ></textarea>
            <div className="flex justify-between">
                <input
                    type="date"
                    className={`max-w-56 text-t-dark-text/50 focus:text-t-dark-text text-base ${inputsStyles}`}
                    value={initInputsState.date}
                />
                <button
                    className="bg-t-blue hover:bg-t-blue/50 rounded-2xl py-3 px-5 text-white hover:text-t-dark-text border-2 border-t-blue duration-150 active:scale-95"
                    onClick={(e) => {
                        e.preventDefault();
                    }}>Save</button>
            </div>
        </form>
    )
}