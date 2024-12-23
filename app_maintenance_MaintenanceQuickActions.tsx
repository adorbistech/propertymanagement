'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { CreateRequestModal } from './CreateRequestModal'
import { ScheduleMaintenanceModal } from './ScheduleMaintenanceModal'
import { GenerateReportModal } from './GenerateReportModal'

export default function MaintenanceQuickActions() {
  const [isCreateRequestModalOpen, setIsCreateRequestModalOpen] = useState(false)
  const [isScheduleMaintenanceModalOpen, setIsScheduleMaintenanceModalOpen] = useState(false)
  const [isGenerateReportModalOpen, setIsGenerateReportModalOpen] = useState(false)

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
      <div className="space-y-2">
        <Button onClick={() => setIsCreateRequestModalOpen(true)} className="w-full">Create Request</Button>
        <Button onClick={() => setIsScheduleMaintenanceModalOpen(true)} className="w-full">Schedule Maintenance</Button>
        <Button onClick={() => setIsGenerateReportModalOpen(true)} className="w-full">Generate Report</Button>
      </div>
      <CreateRequestModal isOpen={isCreateRequestModalOpen} onClose={() => setIsCreateRequestModalOpen(false)} />
      <ScheduleMaintenanceModal isOpen={isScheduleMaintenanceModalOpen} onClose={() => setIsScheduleMaintenanceModalOpen(false)} />
      <GenerateReportModal isOpen={isGenerateReportModalOpen} onClose={() => setIsGenerateReportModalOpen(false)} />
    </div>
  )
}

