const stats = [
  { label: "Page Views", value: "1.2M", change: "+12.5%" },
  { label: "Visitors", value: "850K", change: "-2.1%" },
  { label: "Sessions", value: "980K", change: "+5.8%" },
  { label: "Events", value: "2.5M", change: "+8.3%" },
];

export default function Stats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-xl border bg-white dark:bg-gray-900 p-6"
        >
          <p className="text-sm text-gray-500">{s.label}</p>
          <p className="text-3xl font-bold">{s.value}</p>
          <p className="text-sm text-green-600">{s.change}</p>
        </div>
      ))}
    </div>
  );
}
