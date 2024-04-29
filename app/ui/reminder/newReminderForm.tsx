import { createNewReminderITem } from "@/app/lib/crud/reminder";

export default function NewReminderForm() {
    const inputsStyles = "p-3 bg-t-green/30 focus:bg-t-green/50 ring-2 ring-t-green ring-offset-2 focus:ring-0 focus:outline-t-green duration-150 rounded-2xl";

    return (
        <form action={createNewReminderITem} className="relative text-t-dark-text text-xl w-10/12 flex flex-col gap-4 mt-4">
            <textarea
                name="text"
                cols={30}
                rows={10}
                required
                className={`w-full max-h-80 ${inputsStyles}`}
                placeholder="Text"
            ></textarea>

            <button
                type="submit"
                className={"bg-t-green hover:bg-t-green/50 hover:text-t-dark-text border-2 border-t-green rounded-2xl text-white py-3 px-5 duration-150 active:scale-95"}
            >
                Save
            </button>
        </form>
    )
};