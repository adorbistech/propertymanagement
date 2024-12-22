import { Suspense } from 'react'
import PropertyList from './PropertyList'
import PropertyListHeader from './PropertyListHeader'
import PropertyListSummary from './PropertyListSummary'
import PropertyListSkeleton from './PropertyListSkeleton'

export default function AllPropertiesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">All Properties</h1>
      <PropertyListHeader />
      <PropertyListSummary />
      <Suspense fallback={<PropertyListSkeleton />}>
        <PropertyList />
      </Suspense>
    </div>
  )
}

