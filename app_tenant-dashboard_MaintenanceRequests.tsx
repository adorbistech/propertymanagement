import { fetchMaintenanceRequests } from '@/lib/api'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default async function MaintenanceRequests() {
  const requests = await fetchMaintenanceRequests()

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Maintenance Requests</h2>
      <ul className="space-y-2 mb-4">
        {requests.map((request) => (
          <li key={request.id} className="flex justify-between items-center">
            <span>{request.description}</span>
            <span className={`px-2 py-1 rounded-full text-xs ${
              request.status === 'open' ? 'bg-yellow-200 text-yellow-800' :
              request.status === 'in progress' ? 'bg-blue-200 text-blue-800' :
              'bg-green-200 text-green-800'
            }`}>
              {request.status}
            </span>
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center">
        <Link href="/tenant-dashboard/maintenance">
          <span className="text-blue-600 hover:underline">View All Requests</span>
        </Link>
        <Button>New Request</Button>
      </div>
    </div>
  )
}

