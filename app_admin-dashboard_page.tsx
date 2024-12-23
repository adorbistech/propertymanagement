import { Suspense } from 'react'
import DashboardMetrics from './DashboardMetrics'
import SubscriptionOverview from './SubscriptionOverview'
import RevenueChart from './RevenueChart'
import RecentActivity from './RecentActivity'
import QuickActions from './QuickActions'
import SystemHealth from './SystemHealth'

export default function AdminDashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Administrator Dashboard</h1>
      <Suspense fallback={<div>Loading metrics...</div>}>
        <DashboardMetrics />
      </Suspense>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Suspense fallback={<div>Loading subscription overview...</div>}>
          <SubscriptionOverview />
        </Suspense>
        <Suspense fallback={<div>Loading revenue chart...</div>}>
          <RevenueChart />
        </Suspense>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Suspense fallback={<div>Loading recent activity...</div>}>
          <RecentActivity />
        </Suspense>
        <Suspense fallback={<div>Loading system health...</div>}>
          <SystemHealth />
        </Suspense>
      </div>
      <QuickActions />
    </div>
  )
}

