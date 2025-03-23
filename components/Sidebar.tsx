'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  User,
  Settings as SettingsIcon,
} from 'lucide-react'; // make sure lucide-react is installed

const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: <Home className="w-4 h-4" /> },
  { name: 'Profile', href: '/profile', icon: <User className="w-4 h-4" /> },
  { name: 'Settings', href: '/settings', icon: <SettingsIcon className="w-4 h-4" /> },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen bg-gray-100 dark:bg-gray-800 p-4">
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-2 rounded transition font-medium ${
              pathname === item.href
                ? 'bg-blue-500 text-white'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
