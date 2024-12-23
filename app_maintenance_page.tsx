import { Suspense } from 'react'
import MaintenanceMetrics from './MaintenanceMetrics'
import RecentMaintenanceActivity from './RecentMaintenanceActivity'
import MaintenanceQuickActions from './MaintenanceQuickActions'
import MaintenanceRequestListContainer from './MaintenanceRequestListContainer'

export default function MaintenanceDashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance Dashboard</h1>
      <Suspense fallback={<div>Loading metrics...</div>}>
        <MaintenanceMetrics />
      </Suspense>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Suspense fallback={<div>Loading recent activity...</div>}>
          <RecentMaintenanceActivity />
        </Suspense>
        <MaintenanceQuickActions />
      </div>
      <Suspense fallback={<div>Loading maintenance requests...</div>}>
        <MaintenanceRequestListContainer />
      </Suspense>
    </div>
  )
}

