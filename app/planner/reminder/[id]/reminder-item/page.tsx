'use client'

import { deleteReminderItemFromFirestoreDB, getReminderFromFirestoreDB, postReminderItemToFirestoreDB } from "@/app/lib/firebase/reminder";
import { IReminerItem } from "@/app/lib/types/planner-types";
import icons from "@/app/ui/common/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface IProps {
    params: { id: string }
}

export default function ReminderItem({ params }: IProps) {
    const router = useRouter();
    const { basketIcon: { getIcon } } = icons;
    const BasketIcon = getIcon('small');
    const idValue = params.id;
    const [reminder, setReminder] = useState<IReminerItem | null>(null);
    const [changedStatus, setChangedStatus] = useState<boolean>(false);

    useEffect(() => {
        const getTask = async () => {
            const result = await getReminderFromFirestoreDB(idValue);
            setReminder(result);;
        }

        getTask();
    }, [])

    if (reminder === null) {
        <div className="h-fit flex flex-row gap-2">
            <div className="w-4 h-4 rounded-full bg-t-green animate-bounce [animation-delay:.7s]"></div>
            <div className="w-4 h-4 rounded-full bg-t-green animate-bounce [animation-delay:.3s]"></div>
            <div className="w-4 h-4 rounded-full bg-t-green animate-bounce [animation-delay:.7s]"></div>
        </div>
    } else {
        return (
            <article className="text-xl text-t-dark-text">
                <div className="w-full text-2xl bg-t-green p-8 rounded-t-2xl flex items-center justify-between">
                    <Link href="/planner/reminder" className="w-10 h-10 rounded-full bg-white/50 text-t-gray/60 text-2xl flex items-center justify-center">🡨</Link>

                    <button
                        className="w-10 h-10 rounded-full bg-white/50 text-t-gray/60 text-2xl flex items-center justify-center"
                        onClick={() => {
                            deleteReminderItemFromFirestoreDB(idValue);
                            router.push('/planner/reminder');
                        }}
                    >
                        {BasketIcon}
                    </button>
                </div>

                <textarea
                    name=""
                    id=""
                    cols={30}
                    rows={10}
                    className="w-full min-h-96 p-5 bg-t-green/50 "
                    value={reminder.text}
                    onChange={(e) => {
                        setChangedStatus(true);
                        setReminder({ ...reminder, text: e.target.value })
                    }}
                ></textarea>
                <div className="-mt-2 w-full bg-t-green p-8 rounded-b-2xl flex justify-between items-center">
                    {changedStatus &&
                        <button
                            className="px-6 py-3 border-2 border-t-green rounded-2xl bg-white/50 hover:bg-white/40 duration-150"
                            onClick={() => {
                                // deleteTaskFromFirestoreDB(initDate, task.id)
                                postReminderItemToFirestoreDB({ ...reminder, id: idValue });
                                setChangedStatus(false);
                            }}
                        >Save</button>
                    }
                </div>
            </article>
        )
    }
}