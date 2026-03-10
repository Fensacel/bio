"use client";

import { useState, useEffect } from "react";
import profile, { type Profile, type Link } from "../data/profile";
import { PencilIcon } from "../components/Icons";

const STORAGE_KEY = "linktree-profile";

function loadProfile(): Profile {
  if (typeof window === "undefined") return profile;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored) as Profile;
    } catch {
      return profile;
    }
  }
  return profile;
}

export default function AdminPage() {
  const [data, setData] = useState<Profile>(profile);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setData(loadProfile());
  }, []);

  const save = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const reset = () => {
    localStorage.removeItem(STORAGE_KEY);
    setData(profile);
  };

  const updateLink = (index: number, field: keyof Link, value: string) => {
    setData((prev) => {
      const links = [...prev.links];
      links[index] = { ...links[index], [field]: value };
      return { ...prev, links };
    });
  };

  const addLink = () => {
    setData((prev) => ({
      ...prev,
      links: [...prev.links, { title: "", url: "", icon: "link" }],
    }));
  };

  const removeLink = (index: number) => {
    setData((prev) => ({
      ...prev,
      links: prev.links.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="flex min-h-dvh items-start justify-center bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 px-4 py-12 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <main className="w-full max-w-lg">
        <div className="rounded-2xl bg-white/80 p-6 shadow-xl backdrop-blur-sm dark:bg-gray-900/80">
          <div className="mb-6 flex items-center gap-3">
            <PencilIcon className="h-6 w-6 text-purple-600" />
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              Admin — Edit Profile
            </h1>
          </div>

          {/* Name & Bio */}
          <div className="mb-6 space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                value={data.name}
                onChange={(e) =>
                  setData((p) => ({ ...p, name: e.target.value }))
                }
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Bio
              </label>
              <input
                value={data.bio}
                onChange={(e) =>
                  setData((p) => ({ ...p, bio: e.target.value }))
                }
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Avatar URL
              </label>
              <input
                value={data.avatar}
                onChange={(e) =>
                  setData((p) => ({ ...p, avatar: e.target.value }))
                }
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />
            </div>
          </div>

          {/* Links */}
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            Links
          </h2>
          <div className="mb-4 space-y-4">
            {data.links.map((link, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/50"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-400">
                    Link {i + 1}
                  </span>
                  <button
                    onClick={() => removeLink(i)}
                    className="text-xs text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
                <div className="space-y-2">
                  <input
                    placeholder="Title"
                    value={link.title}
                    onChange={(e) => updateLink(i, "title", e.target.value)}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  />
                  <input
                    placeholder="URL"
                    value={link.url}
                    onChange={(e) => updateLink(i, "url", e.target.value)}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  />
                  <select
                    value={link.icon || "link"}
                    onChange={(e) => updateLink(i, "icon", e.target.value)}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  >
                    <option value="link">Link</option>
                    <option value="globe">Globe</option>
                    <option value="instagram">Instagram</option>
                    <option value="tiktok">TikTok</option>
                    <option value="youtube">YouTube</option>
                    <option value="github">GitHub</option>
                    <option value="whatsapp">WhatsApp</option>
                  </select>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={addLink}
            className="mb-6 w-full rounded-lg border-2 border-dashed border-gray-300 py-2 text-sm font-medium text-gray-500 transition-colors hover:border-purple-400 hover:text-purple-600 dark:border-gray-600 dark:text-gray-400 dark:hover:border-purple-500 dark:hover:text-purple-400"
          >
            + Add Link
          </button>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={save}
              className="flex-1 rounded-lg bg-purple-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-purple-700"
            >
              {saved ? "✓ Saved!" : "Save to LocalStorage"}
            </button>
            <button
              onClick={reset}
              className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800"
            >
              Reset
            </button>
          </div>

          <p className="mt-4 text-center text-xs text-gray-400 dark:text-gray-600">
            Changes are saved to localStorage. Edit{" "}
            <code className="rounded bg-gray-100 px-1 py-0.5 dark:bg-gray-800">
              app/data/profile.ts
            </code>{" "}
            for permanent changes.
          </p>
        </div>
      </main>
    </div>
  );
}
