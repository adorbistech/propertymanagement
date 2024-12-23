import { fetchAdminDashboardMetrics } from '@/lib/api'

export default async function DashboardMetrics() {
  const metrics = await fetchAdminDashboardMetrics()

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <MetricCard title="Total Users" value={metrics.totalUsers} trend={metrics.usersTrend} />
      <MetricCard title="Active Subscriptions" value={metrics.activeSubscriptions} trend={metrics.subscriptionsTrend} />
      <MetricCard title="Monthly Revenue" value={`$${metrics.monthlyRevenue.toLocaleString()}`} trend={metrics.revenueTrend} />
      <MetricCard title="Support Tickets" value={metrics.supportTickets} trend={metrics.ticketsTrend} />
    </div>
  )
}

function MetricCard({ title, value, trend }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="text-2xl font-semibold mt-2">{value}</p>
      <p className={`text-sm ${trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
        {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
      </p>
    </div>
  )
}

