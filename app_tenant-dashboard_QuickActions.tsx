'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { PayRentModal } from './PayRentModal'
import { SubmitMaintenanceRequestModal } from './SubmitMaintenanceRequestModal'
import { ViewDocumentsModal } from './ViewDocumentsModal'

export default function QuickActions() {
  const [isPayRentModalOpen, setIsPayRentModalOpen] = useState(false)
  const [isMaintenanceRequestModalOpen, setIsMaintenanceRequestModalOpen] = useState(false)
  const [isViewDocumentsModalOpen, setIsViewDocumentsModalOpen] = useState(false)

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
      <div className="flex flex-wrap gap-2">
        <Button onClick={() => setIsPayRentModalOpen(true)}>Pay Rent</Button>
        <Button onClick={() => setIsMaintenanceRequestModalOpen(true)}>Submit Maintenance Request</Button>
        <Button onClick={() => setIsViewDocumentsModalOpen(true)}>View Documents</Button>
      </div>
      <PayRentModal isOpen={isPayRentModalOpen} onClose={() => setIsPayRentModalOpen(false)} />
      <SubmitMaintenanceRequestModal isOpen={isMaintenanceRequestModalOpen} onClose={() => setIsMaintenanceRequestModalOpen(false)} />
      <ViewDocumentsModal isOpen={isViewDocumentsModalOpen} onClose={() => setIsViewDocumentsModalOpen(false)} />
    </div>
  )
}

