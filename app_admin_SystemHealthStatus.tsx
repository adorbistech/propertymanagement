import { fetchSystemHealth } from '@/lib/api'

export default async function SystemHealthStatus() {
  const healthStatus = await fetchSystemHealth()

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">System Health Status</h2>
      <ul className="space-y-2">
        {Object.entries(healthStatus).map(([key, value]) => (
          <li key={key} className="flex justify-between items-center">
            <span>{key}</span>
            <span className={`px-2 py-1 rounded-full text-xs ${value === 'Healthy' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
              {value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

