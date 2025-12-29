export default function TopBar() {
  return (
    <header className="h-16 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark px-8 flex items-center justify-between">
      <h2 className="text-xl font-bold">Dashboard</h2>

      <div className="flex gap-3">
        <button className="border rounded-lg px-3 py-1.5 text-sm">
          Website: Acme Inc
        </button>
        <button className="border rounded-lg px-3 py-1.5 text-sm">
          Last 30 Days
        </button>
      </div>
    </header>
  );
}
