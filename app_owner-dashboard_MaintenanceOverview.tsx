import { fetchMaintenanceOverview } from '@/lib/api'
import Link from 'next/link'

export default async function MaintenanceOverview() {
  const maintenance = await fetchMaintenanceOverview()

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Maintenance Overview</h2>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Open Requests:</span>
          <span className="font-semibold">{maintenance.openRequests}</span>
        </div>
        <div className="flex justify-between">
          <span>In Progress:</span>
          <span className="font-semibold">{maintenance.inProgressRequests}</span>
        </div>
        <div className="flex justify-between">
          <span>Completed This Month:</span>
          <span className="font-semibold">{maintenance.completedThisMonth}</span>
        </div>
      </div>
      <Link href="/maintenance" className="text-blue-600 hover:underline block mt-4">
        View All Maintenance Requests
      </Link>
    </div>
  )
}

