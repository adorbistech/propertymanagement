import { fetchRecentFinancialActivity } from '@/lib/api'

export default async function RecentFinancialActivity() {
  const activities = await fetchRecentFinancialActivity()

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Recent Financial Activity</h2>
      <ul className="space-y-2">
        {activities.map((activity, index) => (
          <li key={index} className="flex justify-between items-center">
            <span>{activity.description}</span>
            <span className="text-sm text-gray-500">${activity.amount.toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

