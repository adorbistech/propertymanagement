import { fetchTenantOverview } from '@/lib/api'

export default async function TenantOverview() {
  const overview = await fetchTenantOverview()

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <h2 className="text-xl font-semibold mb-4">Welcome, {overview.name}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <InfoCard title="Unit" value={overview.unit} />
        <InfoCard title="Lease Ends" value={overview.leaseEndDate} />
        <InfoCard title="Rent Due" value={`$${overview.rentDue}`} />
        <InfoCard title="Next Due Date" value={overview.nextDueDate} />
      </div>
    </div>
  )
}

function InfoCard({ title, value }) {
  return (
    <div className="bg-gray-100 p-3 rounded">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="text-lg font-semibold mt-1">{value}</p>
    </div>
  )
}

