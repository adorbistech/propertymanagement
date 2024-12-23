import { Suspense } from 'react'
import TaskOverview from './TaskOverview'
import WorkOrderSummary from './WorkOrderSummary'
import InventoryStatus from './InventoryStatus'
import CommunicationCenter from './CommunicationCenter'
import UpcomingAppointments from './UpcomingAppointments'
import QuickActions from './QuickActions'

export default function MaintenanceDashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance Dashboard</h1>
      <Suspense fallback={<div>Loading task overview...</div>}>
        <TaskOverview />
      </Suspense>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Suspense fallback={<div>Loading work order summary...</div>}>
          <WorkOrderSummary />
        </Suspense>
        <Suspense fallback={<div>Loading inventory status...</div>}>
          <InventoryStatus />
        </Suspense>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Suspense fallback={<div>Loading communication center...</div>}>
          <CommunicationCenter />
        </Suspense>
        <Suspense fallback={<div>Loading upcoming appointments...</div>}>
          <UpcomingAppointments />
        </Suspense>
      </div>
      <QuickActions />
    </div>
  )
}

