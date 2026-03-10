import Image from "next/image";
import type { Profile } from "../data/profile";

export default function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative h-28 w-28 overflow-hidden rounded-full ring-4 ring-blue-200/60 shadow-xl shadow-blue-500/10 dark:ring-blue-900/40 dark:shadow-blue-500/5">
        <Image
          src={profile.avatar}
          alt={profile.name}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          {profile.name}
        </h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          {profile.bio}
        </p>
      </div>
    </div>
  );
}
