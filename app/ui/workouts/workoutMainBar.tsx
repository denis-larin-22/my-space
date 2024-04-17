import Link from "next/link";
import icons from "../common/icons";

export default function WorkoutMainBar() {
    const { workoutIcon: { getIcon } } = icons;
    const WorkoutIcon = getIcon("large", '-rotate-45 absolute bottom-3 right-3 group-hover:scale-125 duration-150');
    const workout = [
        {
            exercise: 'Жим на ровной',
            sets: 4,
            reps: 12
        },
        {
            exercise: 'Жим',
            sets: 4,
            reps: 12
        },
        {
            exercise: 'Бабочка',
            sets: 4,
            reps: 12
        },
        {
            exercise: 'Подьем ровного',
            sets: 4,
            reps: 12
        },
        {
            exercise: 'Молотки',
            sets: 4,
            reps: 12
        },
        {
            exercise: 'Супинация',
            sets: 4,
            reps: 12
        },
    ]; //PROPS

    return (
        <Link
            href="/workouts"
            className="group relative h-full inline-flex flex-col justify-between col-span-1 row-span-3 rounded-3xl bg-t-orange bg-opacity-80 hover:ring-8 ring-offset-2 ring-t-orange ring-opacity-50 duration-150"
        >
            <div className="p-6 text-black flex flex-col justify-between">
                <p className="text-2xl">Workout day 💪</p>
                <p className="text-xl mt-3">Грудь/бицепс</p>

                <ul className="flex flex-col gap-2 before:mt-2 before:block before:w-36 before:h-1 before:bg-white before:rounded-xl before:opacity-85">
                    {workout.map((item, index) => (
                        <li
                            key={index}
                            className="w-full flex justify-between items-center gap-2"
                        >
                            <p className="">{++index}. {item.exercise}</p>
                            <p className="text-lg opacity-85 after:block after:w-full after:h-[2px] after:bg-white">{item.sets}/{item.reps}</p>
                        </li>
                    ))}
                </ul>

                {WorkoutIcon}
            </div>
        </Link>
    )
}