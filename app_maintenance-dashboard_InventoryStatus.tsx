import { fetchInventoryStatus } from '@/lib/api'
import Link from 'next/link'

export default async function InventoryStatus() {
  const inventory = await fetchInventoryStatus()

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Inventory Status</h2>
      <ul className="space-y-2 mb-4">
        {inventory.lowStock.map((item) => (
          <li key={item.id} className="flex justify-between items-center">
            <span>{item.name}</span>
            <span className="text-red-600 font-semibold">{item.quantity} left</span>
          </li>
        ))}
      </ul>
      <Link href="/maintenance-dashboard/inventory">
        <span className="text-blue-600 hover:underline">Manage Inventory</span>
      </Link>
    </div>
  )
}

