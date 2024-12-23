'use client'

import { useQuery } from '@tanstack/react-query'
import { fetchMaintenanceRequests } from '@/lib/api'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function MaintenanceRequestList({ searchTerm, filter, sort }) {
  const { data: requests, isLoading, error } = useQuery(
    ['maintenanceRequests', searchTerm, filter, sort],
    () => fetchMaintenanceRequests({ searchTerm, filter, sort })
  )

  if (isLoading) return <div>Loading maintenance requests...</div>
  if (error) return <div>Error loading maintenance requests: {error.message}</div>

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Request ID</th>
            <th className="py-3 px-6 text-left">Date</th>
            <th className="py-3 px-6 text-left">Property</th>
            <th className="py-3 px-6 text-left">Issue</th>
            <th className="py-3 px-6 text-left">Priority</th>
            <th className="py-3 px-6 text-left">Status</th>
            <th className="py-3 px-6 text-left">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {requests.map((request) => (
            <tr key={request.id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left whitespace-nowrap">
                <span className="font-medium">{request.id}</span>
              </td>
              <td className="py-3 px-6 text-left">{request.date}</td>
              <td className="py-3 px-6 text-left">{request.property}</td>
              <td className="py-3 px-6 text-left">{request.issue}</td>
              <td className="py-3 px-6 text-left">
                <span className={`bg-${request.priority === 'high' ? 'red' : request.priority === 'medium' ? 'yellow' : 'green'}-200 text-${request.priority === 'high' ? 'red' : request.priority === 'medium' ? 'yellow' : 'green'}-600 py-1 px-3 rounded-full text-xs`}>
                  {request.priority}
                </span>
              </td>
              <td className="py-3 px-6 text-left">
                <span className={`bg-${request.status === 'open' ? 'blue' : request.status === 'inProgress' ? 'yellow' : 'green'}-200 text-${request.status === 'open' ? 'blue' : request.status === 'inProgress' ? 'yellow' : 'green'}-600 py-1 px-3 rounded-full text-xs`}>
                  {request.status}
                </span>
              </td>
              <td className="py-3 px-6 text-left">
                <div className="flex item-center justify-center">
                  <Link href={`/maintenance/requests/${request.id}`} passHref>
                    <Button variant="link" className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      View
                    </Button>
                  </Link>
                  <Button variant="link" className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                    Update
                  </Button>
                  <Button variant="link" className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                    Assign
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

