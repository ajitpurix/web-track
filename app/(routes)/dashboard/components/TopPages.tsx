const pages = [
  { path: "/", views: "280k", bounce: "45%" },
  { path: "/pricing", views: "192k", bounce: "33%" },
  { path: "/blog", views: "150k", bounce: "28%" },
];

export default function TopPages() {
  return (
    <div className="rounded-xl border bg-white dark:bg-gray-900 p-6">
      <h3 className="text-lg font-semibold mb-4">Top Pages</h3>

      <div className="space-y-2 text-sm">
        {pages.map((p) => (
          <div key={p.path} className="flex justify-between">
            <span>{p.path}</span>
            <span>{p.views}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
