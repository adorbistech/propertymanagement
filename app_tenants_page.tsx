import { Suspense } from 'react'
import TenantMetrics from './TenantMetrics'
import RecentTenantActivity from './RecentTenantActivity'
import TenantQuickActions from './TenantQuickActions'
import TenantListContainer from './TenantListContainer'

export default function TenantDashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Tenant Dashboard</h1>
      <Suspense fallback={<div>Loading metrics...</div>}>
        <TenantMetrics />
      </Suspense>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Suspense fallback={<div>Loading recent activity...</div>}>
          <RecentTenantActivity />
        </Suspense>
        <TenantQuickActions />
      </div>
      <Suspense fallback={<div>Loading tenant list...</div>}>
        <TenantListContainer />
      </Suspense>
    </div>
  )
}

