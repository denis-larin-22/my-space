'use client'

import { useEffect, useState } from "react";
import PlannerTaskList from "./plannerTaskList";
import { _getCurrentDateByNumber } from "@/app/lib/_utils/_getCurrentDateByNumber";
import { ITaskItem } from "@/app/lib/types/planner-types";
import { getPlannerDayListFromFirestoreDB } from "@/app/lib/firebase/planner";
import Link from "next/link";

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
            <div className="flex justify-between ">
                <div className="w-fit bg-t-blue/50 border-2 border-t-blue py-3 px-10 rounded-b-2xl mb-3">
                    <input
                        type="date"
                        name="date"
                        defaultValue={date}
                        onChange={(e) => {
                            setDate(e.target.value)
                        }}
                        className="w-fit p-2 font-semibold text-t-gray rounded-xl outline-t-blue"
                    />

                </div>
                <Link
                    href="/planner/reminder"
                    className="h-fit text-xl text-white bg-t-green/90 px-4 py-3 mt-2 rounded-2xl ring-2 ring-t-green"
                >
                    Reminds
                </Link>
            </div>

            <PlannerTaskList taskList={taskList} />
        </>
    )
}