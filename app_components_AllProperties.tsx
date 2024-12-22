'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Property {
  id: string
  name: string
  address: string
  units: number
  imageUrl?: string
}

export function AllProperties() {
  const [properties, setProperties] = useState<Property[]>([])

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('/api/properties')
        if (!response.ok) {
          throw new Error('Failed to fetch properties')
        }
        const data = await response.json()
        setProperties(data)
      } catch (error) {
        console.error('Error fetching properties:', error)
      }
    }

    fetchProperties()
  }, [])

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">All Properties</h2>
      <div className="border border-gray-300 rounded-lg overflow-hidden">
        <div className="bg-gray-100 p-4">
          <div className="grid grid-cols-4 gap-4 font-bold">
            <div>Name</div>
            <div>Address</div>
            <div>Units</div>
            <div>Image</div>
          </div>
        </div>
        {properties.map((property) => (
          <div key={property.id} className="grid grid-cols-4 gap-4 p-4 border-t border-gray-300">
            <div>{property.name}</div>
            <div>{property.address}</div>
            <div>{property.units}</div>
            <div>
              <Image
                src={property.imageUrl || '/placeholder.svg'}
                alt={property.name}
                width={100}
                height={100}
                className="rounded-md"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

