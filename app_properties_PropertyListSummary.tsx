import { fetchPropertySummary } from '@/lib/api'

export default async function PropertyListSummary() {
  const summary = await fetchPropertySummary()

  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div>
        <h3 className="text-sm font-medium text-gray-500">Total Properties</h3>
        <p className="text-2xl font-semibold">{summary.totalProperties}</p>
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-500">Average Occupancy</h3>
        <p className="text-2xl font-semibold">{summary.averageOccupancy}%</p>
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-500">Total Units</h3>
        <p className="text-2xl font-semibold">{summary.totalUnits}</p>
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-500">Monthly Revenue</h3>
        <p className="text-2xl font-semibold">${summary.totalMonthlyRevenue.toLocaleString()}</p>
      </div>
    </div>
  )
}

