"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddWebsitePage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  return (
    <div className="max-w-xl space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold">Add New Website</h1>
        <p className="text-gray-500 mt-1">
          Enter your website details to start tracking analytics.
        </p>
      </div>

      {/* Form */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 space-y-6">
        {/* Website Name */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Website Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="My Portfolio"
            className="w-full px-3 py-2 rounded-lg border bg-transparent focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Website URL */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Website URL
          </label>
          <div className="flex">
            <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 bg-gray-100 dark:bg-gray-800 text-sm">
              https://
            </span>
            <input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="example.com"
              className="flex-1 px-3 py-2 rounded-r-lg border bg-transparent focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <p className="text-xs text-gray-400 mt-1">
            We'll verify this domain in the next step.
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-2">
          <button
            onClick={() => {
              console.log({ name, url });
              router.push("/dashboard/websites");
            }}
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg font-semibold"
          >
            Continue
          </button>

          <button
            onClick={() => router.back()}
            className="px-5 py-2 rounded-lg border font-medium"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
