import { Suspense } from 'react'
import DashboardMetrics from './DashboardMetrics'
import PropertyOverview from './PropertyOverview'
import FinancialSummary from './FinancialSummary'
import MaintenanceOverview from './MaintenanceOverview'
import RecentActivities from './RecentActivities'
import QuickActions from './QuickActions'

export default function OwnerDashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Owner Dashboard</h1>
      <Suspense fallback={<div>Loading metrics...</div>}>
        <DashboardMetrics />
      </Suspense>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Suspense fallback={<div>Loading property overview...</div>}>
          <PropertyOverview />
        </Suspense>
        <Suspense fallback={<div>Loading financial summary...</div>}>
          <FinancialSummary />
        </Suspense>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Suspense fallback={<div>Loading maintenance overview...</div>}>
          <MaintenanceOverview />
        </Suspense>
        <Suspense fallback={<div>Loading recent activities...</div>}>
          <RecentActivities />
        </Suspense>
      </div>
      <QuickActions />
    </div>
  )
}

