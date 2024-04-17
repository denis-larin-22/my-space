'use client'

import { useEffect, useState } from "react";
import TaskList from "./taskList";
import { _getCurrentDateByNumber } from "@/app/lib/_utils/_getCurrentDateByNumber";
import { ITaskItem } from "@/app/lib/types/planner-types";
import { getPlannerDayListFromFirestoreDB } from "@/app/lib/firebase/planner";

export default function PlannerTasks() {
    const [date, setDate] = useState(_getCurrentDateByNumber());
    const [taskList, setTaskList] = useState<ITaskItem[] | [] | 'loading'>('loading');

    useEffect(() => {

        async function getTaskList() {
            setTaskList('loading');
            const list = await getPlannerDayListFromFirestoreDB(date);
            setTaskList(list);
        }

        getTaskList();
    }, [date])

    return (
        <>
            <div className="w-fit bg-t-blue/50 border-2 border-t-blue py-3 px-10 rounded-b-2xl mb-3">
                <input
                    type="date"
                    name="date"
                    defaultValue={date}
                    onChange={(e) => {
                        setDate(e.target.value)
                    }}
                    className="font-semibold text-t-gray w-fit p-2 rounded-xl outline-t-blue"
                />
            </div>

            <TaskList taskList={taskList} />
        </>
    )
}