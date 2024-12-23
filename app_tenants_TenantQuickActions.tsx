'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { AddTenantModal } from './AddTenantModal'
import { CreateLeaseModal } from './CreateLeaseModal'
import { BulkCommunicationModal } from './BulkCommunicationModal'

export default function TenantQuickActions() {
  const [isAddTenantModalOpen, setIsAddTenantModalOpen] = useState(false)
  const [isCreateLeaseModalOpen, setIsCreateLeaseModalOpen] = useState(false)
  const [isBulkCommunicationModalOpen, setIsBulkCommunicationModalOpen] = useState(false)

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
      <div className="space-y-2">
        <Button onClick={() => setIsAddTenantModalOpen(true)} className="w-full">Add Tenant</Button>
        <Button onClick={() => setIsCreateLeaseModalOpen(true)} className="w-full">Create Lease</Button>
        <Button onClick={() => setIsBulkCommunicationModalOpen(true)} className="w-full">Send Bulk Communication</Button>
      </div>
      <AddTenantModal isOpen={isAddTenantModalOpen} onClose={() => setIsAddTenantModalOpen(false)} />
      <CreateLeaseModal isOpen={isCreateLeaseModalOpen} onClose={() => setIsCreateLeaseModalOpen(false)} />
      <BulkCommunicationModal isOpen={isBulkCommunicationModalOpen} onClose={() => setIsBulkCommunicationModalOpen(false)} />
    </div>
  )
}

