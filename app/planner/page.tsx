import { _getCurrentDate } from "../lib/_utils";
import icons from "../ui/common/icons";
import TaskList from "../ui/planner/taskList";
import ProgressBar from "../ui/progress-bar";

export default function Planner() {
    const date = _getCurrentDate();

    return (
        <section className="relative">
            <div className="bg-t-blue p-5 rounded-2xl text-white flex justify-between">
                {/* <p className="inline-flex items-center justify-center w-10 h-10 bg-t-blue rounded-full"></p> */}
                <div className="">
                    <h2 className="text-3xl font-bold">Planner</h2>
                    <p className="text-sm font-semibold text-t-gray">{date}</p>
                </div>
                <button className="w-12 h-12 rounded-full bg-white text-t-blue text-2xl flex items-center justify-center active:scale-95">+</button>
            </div>
            <div className="p-3 flex items-center gap-7 text-t-gray font-semibold">
                <div className="p-2 ring-2 ring-t-blue rounded-2xl bg-t-blue/50">
                    <p className="">Total tasks: 4</p>
                    <p className="text-3xl">Undone: 4</p>
                </div>
                <ProgressBar progressValue={77} theme="blue" />
            </div>

            <TaskList />
        </section>
    )
}