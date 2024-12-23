'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { AddPropertyModal } from './AddPropertyModal'
import { GenerateReportModal } from './GenerateReportModal'
import { CommunicationCenterModal } from './CommunicationCenterModal'

export default function QuickActions() {
  const [isAddPropertyModalOpen, setIsAddPropertyModalOpen] = useState(false)
  const [isGenerateReportModalOpen, setIsGenerateReportModalOpen] = useState(false)
  const [isCommunicationCenterModalOpen, setIsCommunicationCenterModalOpen] = useState(false)

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
      <div className="flex flex-wrap gap-2">
        <Button onClick={() => setIsAddPropertyModalOpen(true)}>Add Property</Button>
        <Button onClick={() => setIsGenerateReportModalOpen(true)}>Generate Report</Button>
        <Button onClick={() => setIsCommunicationCenterModalOpen(true)}>Communication Center</Button>
      </div>
      <AddPropertyModal isOpen={isAddPropertyModalOpen} onClose={() => setIsAddPropertyModalOpen(false)} />
      <GenerateReportModal isOpen={isGenerateReportModalOpen} onClose={() => setIsGenerateReportModalOpen(false)} />
      <CommunicationCenterModal isOpen={isCommunicationCenterModalOpen} onClose={() => setIsCommunicationCenterModalOpen(false)} />
    </div>
  )
}

