import { Suspense } from 'react'
import TenantOverview from './TenantOverview'
import RentSummary from './RentSummary'
import MaintenanceRequests from './MaintenanceRequests'
import CommunicationCenter from './CommunicationCenter'
import UpcomingEvents from './UpcomingEvents'
import QuickActions from './QuickActions'

export default function TenantDashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Tenant Dashboard</h1>
      <Suspense fallback={<div>Loading overview...</div>}>
        <TenantOverview />
      </Suspense>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Suspense fallback={<div>Loading rent summary...</div>}>
          <RentSummary />
        </Suspense>
        <Suspense fallback={<div>Loading maintenance requests...</div>}>
          <MaintenanceRequests />
        </Suspense>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Suspense fallback={<div>Loading communication center...</div>}>
          <CommunicationCenter />
        </Suspense>
        <Suspense fallback={<div>Loading upcoming events...</div>}>
          <UpcomingEvents />
        </Suspense>
      </div>
      <QuickActions />
    </div>
  )
}

