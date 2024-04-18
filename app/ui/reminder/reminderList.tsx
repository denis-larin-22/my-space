import { ReminderListArray } from "@/app/lib/types/planner-types";

export default function ReminderList() {
    const reminderList: ReminderListArray = [
        { id: 'sfsdfdsf', text: 'loremds fs dknf ds sdnf;' },
        { id: 'eroughreiov', text: 'SDSVjdsinlvdsn fs dknf ds sdnf;' },
        { id: 'onlbmdfo;', text: 'dfsk; dsfl mlskmf sdnf;' },
        { id: 'sfsdfdsf', text: 'loremds fs dknf ds sdnf;' },
        { id: 'sfsdfdsf', text: 'loremds fs dknf ds sdnf;' },
        { id: 'onlbmdfo;', text: 'dfsk; dsfl mlskmf sdnf;' },
        { id: 'onlbmdfo;', text: 'dfsk; dsfl mlskmf sdnf;' },
        { id: 'eroughreiov', text: 'SDSVjdsinlvdsn fs dknf ds sdnf;' },
        { id: 'eroughreiov', text: 'SDSVjdsinlvdsn fs dknf ds sdnf;' },
    ];

    return (
        <ul className="columns-4">
            {reminderList.map((reminder) => (
                <li
                    key={reminder.id}
                    className="break-inside-avoid p-5 mb-3 bg-t-green/50 border-2 border-t-green rounded-2xl text-xl hover:ring-2 ring-t-green ring-offset-2 cursor-pointer all duration-150"
                >
                    ☝ {reminder.text}
                </li>
            ))}
        </ul>
    )
}