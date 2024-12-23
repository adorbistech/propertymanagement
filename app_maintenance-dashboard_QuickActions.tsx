'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { CreateWorkOrderModal } from './CreateWorkOrderModal'
import { ClockInOutModal } from './ClockInOutModal'
import { SubmitReportModal } from './SubmitReportModal'

export default function QuickActions() {
  const [isCreateWorkOrderModalOpen, setIsCreateWorkOrderModalOpen] = useState(false)
  const [isClockInOutModalOpen, setIsClockInOutModalOpen] = useState(false)
  const [isSubmitReportModalOpen, setIsSubmitReportModalOpen] = useState(false)

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
      <div className="flex flex-wrap gap-2">
        <Button onClick={() => setIsCreateWorkOrderModalOpen(true)}>Create Work Order</Button>
        <Button onClick={() => setIsClockInOutModalOpen(true)}>Clock In/Out</Button>
        <Button onClick={() => setIsSubmitReportModalOpen(true)}>Submit Report</Button>
      </div>
      <CreateWorkOrderModal isOpen={isCreateWorkOrderModalOpen} onClose={() => setIsCreateWorkOrderModalOpen(false)} />
      <ClockInOutModal isOpen={isClockInOutModalOpen} onClose={() => setIsClockInOutModalOpen(false)} />
      <SubmitReportModal isOpen={isSubmitReportModalOpen} onClose={() => setIsSubmitReportModalOpen(false)} />
    </div>
  )
}

