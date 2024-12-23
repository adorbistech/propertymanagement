import { fetchRecentMaintenanceActivity } from '@/lib/api'

export default async function RecentMaintenanceActivity() {
  const activities = await fetchRecentMaintenanceActivity()

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Recent Maintenance Activity</h2>
      <ul className="space-y-2">
        {activities.map((activity, index) => (
          <li key={index} className="flex justify-between items-center">
            <span>{activity.description}</span>
            <span className="text-sm text-gray-500">{activity.date}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

