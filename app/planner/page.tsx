import { _getCurrentDate } from "../lib/_utils";
import { _getCurrentDateByNumber } from "../lib/_utils/_getCurrentDateByNumber";
import PlannerTasks from "../ui/planner/plannerTasks";

export default function Planner() {
    return (
        <section className="relative">
            <h2 className="inline-block w-full bg-t-blue p-5 rounded-2xl rounded-bl-none text-white text-3xl font-bold">Planner</h2>

            <PlannerTasks />
        </section>
    )
}