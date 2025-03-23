'use client';

import BackButton from '@/components/BackButton';
import { useTheme } from '@/components/ThemeContext';

export default function Profile() {
  const { dark, toggleDark } = useTheme();

  return (
    <div className="p-6 min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
      <BackButton />
      <h1 className="text-3xl font-bold mt-6 mb-4">Profile</h1>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 space-y-4">
        <div className="space-y-2">
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Email:</strong> john.doe@example.com</p>
          <p><strong>Role:</strong> Admin</p>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium mb-1">Theme</label>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={toggleDark}
          >
            Toggle to {dark ? 'Light' : 'Dark'} Mode
          </button>
        </div>
      </div>
    </div>
  );
}
