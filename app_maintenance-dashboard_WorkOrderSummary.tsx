import { fetchWorkOrderSummary } from '@/lib/api'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default async function WorkOrderSummary() {
  const summary = await fetchWorkOrderSummary()

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Work Order Summary</h2>
      <ul className="space-y-2 mb-4">
        {summary.recentOrders.map((order) => (
          <li key={order.id} className="flex justify-between items-center">
            <span className="truncate">{order.description}</span>
            <span className={`px-2 py-1 rounded-full text-xs ${
              order.priority === 'high' ? 'bg-red-200 text-red-800' :
              order.priority === 'medium' ? 'bg-yellow-200 text-yellow-800' :
              'bg-green-200 text-green-800'
            }`}>
              {order.priority}
            </span>
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center">
        <Link href="/maintenance-dashboard/work-orders">
          <span className="text-blue-600 hover:underline">View All Work Orders</span>
        </Link>
        <Button>New Work Order</Button>
      </div>
    </div>
  )
}

