'use client'

import { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()

  const handleLogout = () => {
    localStorage.removeItem('token')
    router.push('/login')
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      router.push('/login')
    }
  }, [])

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 p-6">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        <nav className="flex flex-col gap-4">
          <a
            href="/dashboard"
            className={`hover:underline ${
              pathname === '/dashboard' ? 'text-blue-400' : ''
            }`}
          >
            Dashboard
          </a>
          <a
            href="/dashboard/settings"
            className={`hover:underline ${
              pathname === '/dashboard/settings' ? 'text-blue-400' : ''
            }`}
          >
            Settings
          </a>
          <a
            href="/dashboard/profile"
            className={`hover:underline ${
              pathname === '/dashboard/profile' ? 'text-blue-400' : ''
            }`}
          >
            Profile
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <header className="flex justify-between items-center mb-6">
        {pathname && (
  <h1 className="text-2xl font-bold capitalize">
    {pathname.split('/').pop() || 'Dashboard'}
  </h1>
)}

          <button
            onClick={handleLogout}
            className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 text-sm"
          >
            Logout
          </button>
        </header>

        {children}
      </main>
    </div>
  )
}
