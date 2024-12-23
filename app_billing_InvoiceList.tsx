'use client'

import { useQuery } from '@tanstack/react-query'
import { fetchInvoices } from '@/lib/api'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function InvoiceList({ searchTerm, filter, sort }) {
  const { data: invoices, isLoading, error } = useQuery(
    ['invoices', searchTerm, filter, sort],
    () => fetchInvoices({ searchTerm, filter, sort })
  )

  if (isLoading) return <div>Loading invoices...</div>
  if (error) return <div>Error loading invoices: {error.message}</div>

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Invoice #</th>
            <th className="py-3 px-6 text-left">Date</th>
            <th className="py-3 px-6 text-left">Due Date</th>
            <th className="py-3 px-6 text-left">Amount</th>
            <th className="py-3 px-6 text-left">Status</th>
            <th className="py-3 px-6 text-left">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {invoices.map((invoice) => (
            <tr key={invoice.id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left whitespace-nowrap">
                <span className="font-medium">{invoice.number}</span>
              </td>
              <td className="py-3 px-6 text-left">{invoice.date}</td>
              <td className="py-3 px-6 text-left">{invoice.dueDate}</td>
              <td className="py-3 px-6 text-left">${invoice.amount.toLocaleString()}</td>
              <td className="py-3 px-6 text-left">
                <span className={`bg-${invoice.status === 'paid' ? 'green' : invoice.status === 'overdue' ? 'red' : 'yellow'}-200 text-${invoice.status === 'paid' ? 'green' : invoice.status === 'overdue' ? 'red' : 'yellow'}-600 py-1 px-3 rounded-full text-xs`}>
                  {invoice.status}
                </span>
              </td>
              <td className="py-3 px-6 text-left">
                <div className="flex item-center justify-center">
                  <Link href={`/billing/invoices/${invoice.id}`} passHref>
                    <Button variant="link" className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      View
                    </Button>
                  </Link>
                  <Button variant="link" className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                    Edit
                  </Button>
                  <Button variant="link" className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                    Send
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

