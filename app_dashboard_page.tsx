import DashboardLayout from '@/components/DashboardLayout'
import SummaryStatistics from '@/components/dashboard/SummaryStatistics'
import RecentActivities from '@/components/dashboard/RecentActivities'
import QuickActions from '@/components/dashboard/QuickActions'
import UpcomingLeaseExpirations from '@/components/dashboard/UpcomingLeaseExpirations'
import RevenueOverview from '@/components/dashboard/RevenueOverview'

export default function Dashboard() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SummaryStatistics />
        <RecentActivities />
      </div>
      <div className="mt-6">
        <QuickActions />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <UpcomingLeaseExpirations />
        <RevenueOverview />
      </div>
    </DashboardLayout>
  )
}

