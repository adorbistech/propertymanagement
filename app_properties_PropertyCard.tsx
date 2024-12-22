import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function PropertyCard({ property }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <Image
        src={property.imageUrl || '/placeholder-property.jpg'}
        alt={property.name}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{property.name}</h2>
        <p className="text-gray-600 mb-2">{property.address}</p>
        <div className="flex justify-between text-sm mb-4">
          <span>Units: {property.totalUnits}</span>
          <span>Occupancy: {property.occupancyRate}%</span>
        </div>
        <p className="text-lg font-bold mb-4">
          ${property.monthlyRevenue.toLocaleString()} /month
        </p>
        <div className="flex justify-between">
          <Button variant="outline" size="sm">View Details</Button>
          <Button variant="outline" size="sm">Edit</Button>
        </div>
      </div>
    </div>
  )
}

