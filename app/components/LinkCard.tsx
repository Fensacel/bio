import type { Link } from "../data/profile";
import { getIcon } from "./Icons";

export default function LinkCard({ link }: { link: Link }) {
  const Icon = getIcon(link.icon || "link");

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex w-full items-center gap-4 rounded-2xl bg-white/70 px-5 py-4 shadow-md backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] dark:bg-gray-800/70 dark:shadow-gray-900/30"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-md transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
        <Icon className="h-5 w-5" />
      </span>
      <span className="text-base font-semibold text-gray-800 dark:text-gray-100">
        {link.title}
      </span>
      <svg
        className="ml-auto h-4 w-4 text-gray-400 transition-transform duration-300 group-hover:translate-x-1 dark:text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  );
}
