'use client'

import { _getId, _getIdWithDate } from "@/app/lib/_utils/_getId";
import { deleteTaskFromFirestoreDB, getPlannerTaskFromFirestoreDB, postNewTaskToFirestoreDB } from "@/app/lib/firebase/planner";
import { ITaskItem } from "@/app/lib/types/planner-types";
import icons from "@/app/ui/common/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface IProps {
    params: { id: string }
}

export default function TaskItem({ params }: IProps) {
    const router = useRouter();
    const { basketIcon: { getIcon } } = icons;
    const BasketIcon = getIcon('small');
    const idValue = params.id;
    const [task, setTask] = useState<ITaskItem | null>(null);
    const [changedStatus, setChangedStatus] = useState<boolean>(false);
    const [initDate, setInitDate] = useState<string>('');

    useEffect(() => {
        const getTask = async () => {
            const [date] = idValue.split('!');
            const result = await getPlannerTaskFromFirestoreDB(date, idValue);
            setTask(result);
            setInitDate(result.date);
        }

        getTask();
    }, [])

    if (task === null) {
        <div className="h-fit flex flex-row gap-2">
            <div className="w-4 h-4 rounded-full bg-t-blue animate-bounce [animation-delay:.7s]"></div>
            <div className="w-4 h-4 rounded-full bg-t-blue animate-bounce [animation-delay:.3s]"></div>
            <div className="w-4 h-4 rounded-full bg-t-blue animate-bounce [animation-delay:.7s]"></div>
        </div>
    } else {
        return (
            <article className="text-xl text-t-dark-text">
                <div className="w-full text-2xl bg-t-blue p-8 rounded-t-2xl flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Link href="/planner" className="w-10 h-10 rounded-full bg-white/50 text-t-gray/60 text-2xl flex items-center justify-center">🡨</Link>

                        <input
                            type="text"
                            id=""
                            value={task.name}
                            onChange={(e) => {
                                setChangedStatus(true);
                                setTask({ ...task, name: e.target.value })
                            }}
                            className="w-fit p-4 rounded-xl bg-white/50"
                        />
                    </div>

                    <div className="flex items-center gap-4">
                        <label htmlFor="isDone" className="cursor-pointer text-lg">Status: </label>
                        <button
                            id="isDone"
                            className={`w-10 h-10 rounded-full ${task.isDone ? 'bg-green-400' : 'bg-red-400'} text-t-gray/60 text-2xl flex items-center justify-center`}
                            onClick={() => {
                                setChangedStatus(true);
                                setTask({ ...task, isDone: !task.isDone })
                            }}>{task.isDone ? '✔' : '-'}</button>
                        <button
                            className="w-10 h-10 rounded-full bg-white/50 text-t-gray/60 text-2xl flex items-center justify-center"
                            onClick={() => {
                                deleteTaskFromFirestoreDB(initDate, task.id);
                                router.push('/planner');
                            }}
                        >
                            {BasketIcon}
                        </button>
                    </div>
                </div>

                <textarea
                    name=""
                    id=""
                    cols={30}
                    rows={10}
                    className="w-full min-h-96 p-5 bg-t-blue/50 "
                    value={task.desk}
                    onChange={(e) => {
                        setChangedStatus(true);
                        setTask({ ...task, desk: e.target.value })
                    }}
                ></textarea>
                <div className="-mt-2 w-full bg-t-blue p-8 rounded-b-2xl flex justify-between items-center">
                    <input
                        type="date"
                        name=""
                        id=""
                        className="p-4 rounded-xl bg-white/50"
                        value={task.date}
                        onChange={(e) => {
                            setChangedStatus(true);
                            setTask({ ...task, date: e.target.value })
                        }}
                    />
                    {changedStatus &&
                        <button
                            className="px-6 py-3 border-2 border-t-blue rounded-2xl bg-white/50 hover:bg-white/40 duration-150"
                            onClick={() => {
                                deleteTaskFromFirestoreDB(initDate, task.id)
                                postNewTaskToFirestoreDB({ ...task, id: _getIdWithDate(task.date) });
                                setChangedStatus(false);
                            }}
                        >Save</button>
                    }
                </div>
            </article>
        )
    }
}