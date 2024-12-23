import { fetchUpcomingEvents } from '@/lib/api'
import Link from 'next/link'

export default async function UpcomingEvents() {
  const events = await fetchUpcomingEvents()

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
      <ul className="space-y-2 mb-4">
        {events.map((event) => (
          <li key={event.id} className="flex justify-between items-center">
            <span>{event.title}</span>
            <span className="text-sm text-gray-500">{event.date}</span>
          </li>
        ))}
      </ul>
      <Link href="/tenant-dashboard/events">
        <span className="text-blue-600 hover:underline">View All Events</span>
      </Link>
    </div>
  )
}

