import { fetchTenantMetrics } from '@/lib/api'

export default async function TenantMetrics() {
  const metrics = await fetchTenantMetrics()

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <MetricCard title="Total Tenants" value={metrics.totalTenants} />
      <MetricCard title="Occupancy Rate" value={`${metrics.occupancyRate}%`} />
      <MetricCard title="Rent Collection Rate" value={`${metrics.rentCollectionRate}%`} />
      <MetricCard title="Upcoming Lease Expirations" value={metrics.upcomingLeaseExpirations} />
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

