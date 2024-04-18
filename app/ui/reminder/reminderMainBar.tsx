import Link from "next/link";
import icons from "../common/icons";

export default function ReminderMainBar() {
    const { reminderIcon: { getIcon } } = icons;
    const ReminderIcon = getIcon("large", 'absolute bottom-3 right-3 group-hover:scale-125 duration-150');
    const remindList = [{ id: '56345', text: 'Поменять покрышки' }, { id: '765344', text: 'Поменять прокладку в кране' }, { id: '789687', text: 'Забрать рабочие вещи' }] //PROPS 

    return (
        <Link
            href="/planner/reminder"
            className="group relative inline-block col-span-1 row-span-3 bg-t-green rounded-3xl p-5 text-white hover:ring-8 ring-offset-2 ring-t-green ring-opacity-50 duration-150 active:scale-99"
        >
            <p className="text-2xl">Reminder</p>

            <ul className="text-base mt-3">
                {remindList.map((remind) => (
                    <li key={remind.id}><span className="text-xl">☝</span> {remind.text}</li>
                ))}
            </ul>

            {ReminderIcon}
        </Link>
    )
}