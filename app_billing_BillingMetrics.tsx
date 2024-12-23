import { fetchBillingMetrics } from '@/lib/api'

export default async function BillingMetrics() {
  const metrics = await fetchBillingMetrics()

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <MetricCard title="Total Revenue" value={`$${metrics.totalRevenue.toLocaleString()}`} />
      <MetricCard title="Outstanding Balance" value={`$${metrics.outstandingBalance.toLocaleString()}`} />
      <MetricCard title="Paid Invoices" value={metrics.paidInvoices} />
      <MetricCard title="Overdue Payments" value={metrics.overduePayments} />
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

