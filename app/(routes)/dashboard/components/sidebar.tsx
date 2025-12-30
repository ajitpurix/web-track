import Link from "next/link";

export default function Sidebar() {
  return (
    <nav className="w-64 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark">
      <div className="h-16 flex items-center px-6 font-bold text-lg">
        SaaS Product
      </div>

      <div className="p-4 space-y-2">
        <Link href="/dashboard" className="block px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
          Dashboard
        </Link>

        <Link href="/dashboard/websites" className="block px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
          Websites
        </Link>

        <Link href="/dashboard/events" className="block px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
          Events
        </Link>

        <Link href="/dashboard/settings" className="block px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
          Settings
        </Link>
      </div>
    </nav>
  );
}
