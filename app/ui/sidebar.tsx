import Image from "next/image";
import Link from "next/link";
import { ILink } from "../lib/types/ui-types";



export default function Sidebar() {
    const links: ILink[] = [
        { href: '/', text: 'Dashboard', target: '_parent' },
        { href: '/planner', text: 'Planner', target: "_parent" },
        { href: '/', text: 'Workouts', target: "_parent" },
        { href: '/', text: 'Ideas', target: "_parent" },
        { href: '/', text: 'Accounts', target: "_parent" },
        { href: 'https://denis-larin-22.github.io/my-blog/', text: 'Blog', target: "_blank" },
        { href: '/links', text: 'Workspace', target: "_parent" } //все мои ссылки на ресурсы с которыми я чаще всего работаю (ссылка на lofigirl music)
        // Вощможно помодоро таймер
    ];

    return (
        <aside className="h-full w-96 py-12 px-16 text-white font-semibold">
            <div className="">
                <div className="relative w-fit mb-5">
                    <Link
                        href={'/'}
                        className="inline-flex items-center justify-center w-6 h-6 absolute -top-3 -right-3 rounded-full bg-t-red text-xs"
                    >
                        3
                    </Link>
                    <Image
                        alt="Avatar"
                        src="/assets/images/avatar.jpg"
                        width={72}
                        height={72}
                        className="rounded-2xl"
                    />

                </div>
                <p className="text-3xl mb-1">Dennis</p>
                <p className="text-gray-400 font-normal">denislarin2017@gmail.com</p>
            </div>

            <nav className="mt-28 flex flex-col gap-7 text-2xl text-gray-400">
                {links.map((link, index) => (
                    <Link
                        key={index}
                        href={link.href}
                        className="hover:text-white hover:pl-1 all duration-150"
                    >
                        {link.text}
                    </Link>
                ))}
            </nav>
        </aside>
    )
} 