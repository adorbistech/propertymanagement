'use client'

import { useQuery } from '@tanstack/react-query'
import PropertyCard from './PropertyCard'
import { fetchProperties } from '@/lib/api'

export default function PropertyList() {
  const { data: properties, isLoading, error } = useQuery(['properties'], fetchProperties)

  if (isLoading) return <div>Loading properties...</div>
  if (error) return <div>Error loading properties: {error.message}</div>

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  )
}

