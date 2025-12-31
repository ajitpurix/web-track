"use client";

import { useRouter } from "next/navigation";

export default function WebsitesPage() {
  const router = useRouter();

  // TEMP mock data (later from DB)
  const websites = [
    { id: "1", name: "SaaS Lander", domain: "saaslander.io", views: "24.5k" },
    { id: "2", name: "E-Shopify", domain: "shop.mysite.com", views: "8.2k" },
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Your Websites</h1>
          <p className="text-gray-500">
            Select a website to view analytics or add a new one.
          </p>
        </div>

        {/* ✅ FIX: Navigate to NEW PAGE */}
        <button
          onClick={() => router.push("/dashboard/websites/new")}
          className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium"
        >
          Add Website
        </button>
      </div>

      {/* Website Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {websites.map((site) => (
          <div
            key={site.id}
            className="border rounded-xl p-5 hover:shadow cursor-pointer"
            onClick={() =>
              router.push(`/dashboard?site=${site.id}`)
            }
          >
            <h3 className="font-semibold text-lg">{site.name}</h3>
            <p className="text-sm text-gray-500">{site.domain}</p>

            <div className="mt-4 text-sm text-gray-600">
              {site.views} views / 30d
            </div>

            <span className="mt-4 inline-block text-red-600 font-semibold">
              View Analytics →
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
