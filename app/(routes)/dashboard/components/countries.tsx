const countries = [
  { name: "United States", value: "320k" },
  { name: "United Kingdom", value: "112k" },
  { name: "Germany", value: "98k" },
];

export default function Countries() {
  return (
    <div className="rounded-xl border bg-white dark:bg-gray-900 p-6">
      <h3 className="text-lg font-semibold mb-4">Countries</h3>
      <ul className="space-y-2 text-sm">
        {countries.map((c) => (
          <li key={c.name} className="flex justify-between">
            <span>{c.name}</span>
            <span>{c.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
