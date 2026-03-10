import type { SocialLink } from "../data/profile";
import { getIcon } from "./Icons";

export default function SocialIcons({ socials }: { socials: SocialLink[] }) {
  return (
    <div className="flex items-center gap-4">
      {socials.map((social) => {
        const Icon = getIcon(social.platform);
        return (
          <a
            key={social.platform}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.platform}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/60 text-gray-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:text-blue-600 hover:shadow-md dark:bg-gray-800/60 dark:text-gray-400 dark:hover:text-blue-400"
          >
            <Icon className="h-5 w-5" />
          </a>
        );
      })}
    </div>
  );
}
