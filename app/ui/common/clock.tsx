'use client'

import { _getCurrentDate, _getCurrentTime } from "@/app/lib/_utils";
import { useEffect, useState } from "react";

export default function Clock() {
    const ONE_MINUTE = 60000;
    const currentDate = _getCurrentDate();
    const currentTime = _getCurrentTime();
    const [time, setTime] = useState(currentTime);

    useEffect(() => {
        setInterval(() => {
            setTime(_getCurrentTime());
        }, ONE_MINUTE)
    }, [time]);

    return (
        <div className="flex flex-col items-end">
            <p className="text-t-dark opacity-55 text-9xl row-span-1 col-span-1">{time}</p>
            <p className="text-base text-gray-400">{currentDate}</p>
        </div>
    )
}