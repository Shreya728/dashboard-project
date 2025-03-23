'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function BackButton({ to = '/dashboard' }: { to?: string }) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(to)}
      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    >
      <ArrowLeft className="w-4 h-4" />
      Back to Dashboard
    </button>
  );
}
