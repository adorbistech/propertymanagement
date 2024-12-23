import { fetchTaskOverview } from '@/lib/api'

export default async function TaskOverview() {
  const overview = await fetchTaskOverview()

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <h2 className="text-xl font-semibold mb-4">Task Overview</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatusCard title="Pending" value={overview.pending} color="yellow" />
        <StatusCard title="In Progress" value={overview.inProgress} color="blue" />
        <StatusCard title="Completed" value={overview.completed} color="green" />
        <StatusCard title="Overdue" value={overview.overdue} color="red" />
      </div>
    </div>
  )
}

function StatusCard({ title, value, color }) {
  return (
    <div className={`bg-${color}-100 p-3 rounded`}>
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className={`text-2xl font-semibold mt-1 text-${color}-800`}>{value}</p>
    </div>
  )
}

