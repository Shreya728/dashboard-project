'use client';

import { useRouter } from 'next/navigation';

export default function Header({ dark, toggleDark }: { dark: boolean; toggleDark: () => void }) {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  return (
    <header className="flex justify-between items-center p-4 border-b dark:border-gray-700">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <div className="flex gap-4">
        <button
          onClick={toggleDark}
          className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-800 dark:text-white"
        >
          {dark ? 'Light Mode' : 'Dark Mode'}
        </button>
        <button
          onClick={handleLogout}
          className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
