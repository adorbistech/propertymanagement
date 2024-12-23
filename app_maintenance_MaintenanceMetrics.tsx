import { fetchMaintenanceMetrics } from '@/lib/api'

export default async function MaintenanceMetrics() {
  const metrics = await fetchMaintenanceMetrics()

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <MetricCard title="Open Requests" value={metrics.openRequests} />
      <MetricCard title="Avg. Resolution Time" value={`${metrics.avgResolutionTime} hours`} />
      <MetricCard title="Scheduled Tasks" value={metrics.scheduledTasks} />
      <MetricCard title="Overdue Tasks" value={metrics.overdueTasks} />
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

