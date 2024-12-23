import { fetchPropertyOverview } from '@/lib/api'
import Link from 'next/link'

export default async function PropertyOverview() {
  const properties = await fetchPropertyOverview()

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Property Overview</h2>
      <ul className="space-y-2">
        {properties.map((property) => (
          <li key={property.id} className="flex justify-between items-center">
            <Link href={`/properties/${property.id}`} className="text-blue-600 hover:underline">
              {property.name}
            </Link>
            <span className="text-sm text-gray-500">{property.units} units</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

