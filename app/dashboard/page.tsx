// app/dashboard/page.tsx
import DashboardClient from './DashboardClient';
export const dynamic = 'force-dynamic'; // ensures SSR doesn't cache data

export default function Page() {
  return <DashboardClient />;
}
