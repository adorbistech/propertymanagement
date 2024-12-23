import { Suspense } from 'react'
import BillingMetrics from './BillingMetrics'
import RecentFinancialActivity from './RecentFinancialActivity'
import BillingQuickActions from './BillingQuickActions'
import InvoiceListContainer from './InvoiceListContainer'

export default function BillingDashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Billing Dashboard</h1>
      <Suspense fallback={<div>Loading metrics...</div>}>
        <BillingMetrics />
      </Suspense>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Suspense fallback={<div>Loading recent activity...</div>}>
          <RecentFinancialActivity />
        </Suspense>
        <BillingQuickActions />
      </div>
      <Suspense fallback={<div>Loading invoice list...</div>}>
        <InvoiceListContainer />
      </Suspense>
    </div>
  )
}

