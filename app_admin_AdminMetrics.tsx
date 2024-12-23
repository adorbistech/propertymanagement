import { fetchAdminMetrics } from '@/lib/api'

export default async function AdminMetrics() {
  const metrics = await fetchAdminMetrics()

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <MetricCard title="Total Users" value={metrics.totalUsers} />
      <MetricCard title="Active Sessions" value={metrics.activeSessions} />
      <MetricCard title="Properties Managed" value={metrics.propertiesManaged} />
      <MetricCard title="Pending Requests" value={metrics.pendingRequests} />
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

