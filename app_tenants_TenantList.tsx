'use client'

import { useQuery } from '@tanstack/react-query'
import { fetchTenants } from '@/lib/api'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function TenantList({ searchTerm, filter, sort }) {
  const { data: tenants, isLoading, error } = useQuery(
    ['tenants', searchTerm, filter, sort],
    () => fetchTenants({ searchTerm, filter, sort })
  )

  if (isLoading) return <div>Loading tenants...</div>
  if (error) return <div>Error loading tenants: {error.message}</div>

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Unit</th>
            <th className="py-3 px-6 text-left">Lease Dates</th>
            <th className="py-3 px-6 text-left">Rent</th>
            <th className="py-3 px-6 text-left">Status</th>
            <th className="py-3 px-6 text-left">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {tenants.map((tenant) => (
            <tr key={tenant.id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left whitespace-nowrap">
                <div className="flex items-center">
                  <span className="font-medium">{tenant.name}</span>
                </div>
              </td>
              <td className="py-3 px-6 text-left">{tenant.unit}</td>
              <td className="py-3 px-6 text-left">{tenant.leaseStart} - {tenant.leaseEnd}</td>
              <td className="py-3 px-6 text-left">${tenant.rentAmount}</td>
              <td className="py-3 px-6 text-left">
                <span className={`bg-${tenant.status === 'active' ? 'green' : 'yellow'}-200 text-${tenant.status === 'active' ? 'green' : 'yellow'}-600 py-1 px-3 rounded-full text-xs`}>
                  {tenant.status}
                </span>
              </td>
              <td className="py-3 px-6 text-left">
                <div className="flex item-center justify-center">
                  <Link href={`/tenants/${tenant.id}`} passHref>
                    <Button variant="link" className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      View
                    </Button>
                  </Link>
                  <Button variant="link" className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                    Edit
                  </Button>
                  <Button variant="link" className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                    Message
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

