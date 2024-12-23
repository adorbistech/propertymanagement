import { fetchUpcomingAppointments } from '@/lib/api'
import Link from 'next/link'

export default async function UpcomingAppointments() {
  const appointments = await fetchUpcomingAppointments()

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Upcoming Appointments</h2>
      <ul className="space-y-2 mb-4">
        {appointments.map((appointment) => (
          <li key={appointment.id} className="flex justify-between items-center">
            <span>{appointment.title}</span>
            <span className="text-sm text-gray-500">{appointment.date}</span>
          </li>
        ))}
      </ul>
      <Link href="/maintenance-dashboard/appointments">
        <span className="text-blue-600 hover:underline">View All Appointments</span>
      </Link>
    </div>
  )
}

