"use client";

import { useState, useEffect } from "react";
import type { Profile } from "../data/profile";
import ProfileHeader from "./ProfileHeader";
import LinkCard from "./LinkCard";
import SocialIcons from "./SocialIcons";

const STORAGE_KEY = "linktree-profile";

export default function HomeClient({ fallback }: { fallback: Profile }) {
  const [data, setData] = useState<Profile>(fallback);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setData(JSON.parse(stored) as Profile);
      } catch {
        // ignore invalid JSON
      }
    }
  }, []);

  return (
    <div className="flex min-h-dvh items-start justify-center bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 px-4 py-12 dark:from-gray-950 dark:via-slate-900 dark:to-gray-950">
      <main className="w-full max-w-md">
        <div className="flex flex-col items-center gap-8 animate-fade-in-up">
          <ProfileHeader profile={data} />

          <div className="flex w-full flex-col gap-3">
            {data.links.map((link, i) => (
              <div
                key={link.title + i}
                style={{ animationDelay: `${(i + 1) * 80}ms` }}
                className="animate-fade-in-up"
              >
                <LinkCard link={link} />
              </div>
            ))}
          </div>

          <SocialIcons socials={data.socials} />

          <p className="pb-4 text-xs text-gray-400 dark:text-gray-600">
            &copy; {new Date().getFullYear()} {data.name}
          </p>
        </div>
      </main>
    </div>
  );
}
