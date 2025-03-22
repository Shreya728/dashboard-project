'use client'

import { logoutUser } from '@/utils/auth'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

export default function Header() {
  const router = useRouter()
  const { theme, setTheme } = useTheme()

  return (
    <header className="flex flex-col sm:flex-row justify-between items-center p-4 border-b bg-background text-foreground transition-all duration-300">
      <h1 className="text-xl font-semibold mb-2 sm:mb-0">Dashboard</h1>
      <div className="flex gap-2">
        <Button
          variant="outline"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="transition hover:scale-105"
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </Button>
        <Button
          onClick={() => {
            logoutUser()
            router.push('/login')
          }}
          className="transition hover:scale-105"
        >
          Logout
        </Button>
      </div>
    </header>
  )
}
