'use client'

import { _getCurrentDateByNumber } from "@/app/lib/_utils/_getCurrentDateByNumber";
import { _getId } from "@/app/lib/_utils/_getId";
import { ITaskItem } from "@/app/lib/types/planner-types";
import { ChangeEvent, useState } from "react";

export default function NewTaskForm() {
    const inputsStyles = "p-3 bg-t-blue/30 focus:bg-t-blue/50 ring-2 ring-t-blue ring-offset-2 focus:ring-0 focus:outline-t-blue duration-150 rounded-2xl";
    const [alertState, setAlertState] = useState(false);

    const initInputsState: ITaskItem = {
        id: _getId(),
        name: '',
        desk: '',
        isDone: false,
        date: _getCurrentDateByNumber()
    };

    const [inputsState, setInputState] = useState(initInputsState);

    return (
        <form className="relative text-t-dark-text text-xl w-10/12 flex flex-col gap-4 mt-4">
            <input
                type="text"
                className={`w-full ${inputsStyles}`}
                placeholder="Task title"
                value={inputsState.name}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setInputState({ ...inputsState, name: e.target.value })
                }}
            />
            <textarea
                name="deskription"
                cols={30}
                rows={10}
                className={`w-full max-h-80 ${inputsStyles}`}
                placeholder="Text"
                value={inputsState.desk}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                    setInputState({ ...inputsState, desk: e.target.value })
                }}
            ></textarea>
            <div className="flex justify-between">
                <input
                    type="date"
                    className={`max-w-56 text-t-dark-text/50 focus:text-t-dark-text text-base ${inputsStyles}`}
                    value={inputsState.date}
                    onChange={(e) => {
                        setInputState({ ...inputsState, date: e.target.value });
                    }}
                />
                <button
                    className={`${alertState ? 'bg-t-red/60 hover:bg-t-red/40  hover:text-t-dark-text border-t-red' : 'bg-t-blue hover:bg-t-blue/50 hover:text-t-dark-text border-2 border-t-blue'} rounded-2xl text-white py-3 px-5 border-2 duration-150 active:scale-95`}
                    onClick={(e) => {
                        e.preventDefault();
                        const areFieldFull = inputsState.name.length && inputsState.desk.length;
                        if (areFieldFull) {
                            console.log(inputsState);
                        } else {
                            setAlertState(true);
                            setTimeout(() => setAlertState(false), 4000)
                        }
                    }}>
                    {alertState ? 'Empty fields!' : 'Save'}
                </button>
            </div>
        </form>
    )
}