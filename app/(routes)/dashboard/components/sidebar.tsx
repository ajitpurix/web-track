export default function Sidebar() {
  return (
    <nav className="w-64 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark">
      <div className="h-16 flex items-center px-6 font-bold text-lg">
        SaaS Product
      </div>

      <div className="p-4 space-y-2">
        {["Dashboard", "Websites", "Events", "Settings"].map((item) => (
          <div
            key={item}
            className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
          >
            {item}
          </div>
        ))}
      </div>
    </nav>
  );
}
