import { fetchOwnerDashboardMetrics } from '@/lib/api'

export default async function DashboardMetrics() {
  const metrics = await fetchOwnerDashboardMetrics()

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <MetricCard title="Total Properties" value={metrics.totalProperties} />
      <MetricCard title="Total Units" value={metrics.totalUnits} />
      <MetricCard title="Occupancy Rate" value={`${metrics.occupancyRate}%`} />
      <MetricCard title="Monthly Revenue" value={`$${metrics.monthlyRevenue.toLocaleString()}`} />
    </div>
  )
}

function MetricCard({ title, value }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="text-2xl font-semibold mt-2">{value}</p>
    </div>
  )
}

