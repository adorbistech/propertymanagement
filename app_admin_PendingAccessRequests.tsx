'use client'

import { useQuery } from '@tanstack/react-query'
import { fetchPendingAccessRequests } from '@/lib/api'
import { Button } from '@/components/ui/button'

export default function PendingAccessRequests() {
  const { data: requests, isLoading, error } = useQuery(
    ['pendingAccessRequests'],
    fetchPendingAccessRequests
  )

  if (isLoading) return <div>Loading pending access requests...</div>
  if (error) return <div>Error loading pending access requests: {error.message}</div>

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Pending Access Requests</h2>
      <ul className="space-y-2">
        {requests.map((request) => (
          <li key={request.id} className="flex justify-between items-center">
            <span>{request.userName} - {request.role}</span>
            <div>
              <Button variant="outline" size="sm" className="mr-2">Approve</Button>
              <Button variant="outline" size="sm">Deny</Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

