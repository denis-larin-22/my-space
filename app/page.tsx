import Link from "next/link";
import Image from "next/image";
import PlannerMainBar from "./ui/planner/plannerMainBar";
import ReminderMainBar from "./ui/reminder/reminderMainBar";
import icons from "./ui/common/icons";
import { _getCurrentDate, _getCurrentTime } from "./lib/_utils";
import Clock from "./ui/common/clock";

export default async function Home() {
  const { tasksIcon, messagesIcon, chatGPTIcon } = icons;
  const TasksIcon = tasksIcon.getIcon("small");
  const MessagesIcon = messagesIcon.getIcon("small");
  const ChatGPTIcon = chatGPTIcon.getIcon("small");

  return (
    <main className="relative h-full w-full grid grid-cols-5 grid-rows-4 gap-5">
      {/* Main */}
      <section className="col-span-5 row-span-1 flex justify-between">
        <div className="flex gap-5">
          <div className="after:w-36 after:h-1 after:block after:bg-gray-400 after:rounded-2xl  after:mt-2">
            <h1 className="text-4xl font-extrabold mb-2">Hi, Dennis</h1>
            <p className="text-base text-gray-400 max-w-80">You have 3 unread messages and 3 undone tasks</p>
          </div>

          <nav className="flex gap-2">
            <Link href="/" className="relative h-fit w-fit bg-t-red p-2 rounded-full flex items-center justify-center gap-1 text-white">
              {MessagesIcon}
              <p>3</p>
            </Link>

            <Link href="/planner" className="relative h-fit w-fit bg-t-blue p-2 rounded-full flex items-center justify-center gap-1 text-white">
              {TasksIcon}
              <p>3</p>
            </Link>

            <a href="https://chat.openai.com/" target="_blank" className="bg-[#28a08c] h-9 w-9 flex items-center justify-center rounded-full">
              {ChatGPTIcon}
            </a>

            <a href="https://www.youtube.com/watch?v=jfKfPfyJRdk" target="_blank" className="bg-[#28a08c] h-9 w-9 flex items-center justify-center rounded-full overflow-hidden">
              <Image
                alt="Lofi girl music"
                src="/assets/images/lofi.jpg"
                width={44}
                height={44}
                className="h-11 w-11"
              />
            </a>
          </nav>
        </div>

        <Clock />
      </section>
      {/* today's plan */}
      <PlannerMainBar />
      {/* reminder */}
      <ReminderMainBar />
    </main >
  );
}
