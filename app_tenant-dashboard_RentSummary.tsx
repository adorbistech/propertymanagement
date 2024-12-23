import { fetchRentSummary } from '@/lib/api'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default async function RentSummary() {
  const summary = await fetchRentSummary()

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Rent Summary</h2>
      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span>Current Balance:</span>
          <span className="font-semibold">${summary.currentBalance}</span>
        </div>
        <div className="flex justify-between">
          <span>Next Due Date:</span>
          <span className="font-semibold">{summary.nextDueDate}</span>
        </div>
        <div className="flex justify-between">
          <span>Last Payment:</span>
          <span className="font-semibold">${summary.lastPayment} on {summary.lastPaymentDate}</span>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <Link href="/tenant-dashboard/rent-history">
          <span className="text-blue-600 hover:underline">View Rent History</span>
        </Link>
        <Button>Pay Rent</Button>
      </div>
    </div>
  )
}

