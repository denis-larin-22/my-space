import Link from "next/link";
import { _getCurrentDate } from "../lib/_utils";
import TaskList from "../ui/planner/taskList";

export default function Planner() {
    const date = _getCurrentDate();

    return (
        <section className="relative">
            <div className="bg-t-blue p-5 mb-3 rounded-2xl text-white flex flex-col">
                <h2 className="text-3xl font-bold">Planner</h2>
                <p className="font-semibold text-t-gray">{date}</p>
            </div>

            <TaskList />
        </section>
    )
}