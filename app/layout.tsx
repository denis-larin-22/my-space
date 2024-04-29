import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Sidebar from "./ui/sidebar";

const poppins = Poppins({ subsets: ['latin', 'latin-ext'], weight: '400' });

export const metadata: Metadata = {
  title: "My Space",
  description: "App for working space and not only",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} h-screen w-screen p-5 bg-t-dark flex flex-row overflow-hidden`}>
        <Sidebar />
        <div className="flex-grow overflow-y-auto overflow-x-hidden bg-white rounded-3xl p-20">
          {children}
        </div>
      </body>
    </html>
  );
}
