'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { CreateInvoiceModal } from './CreateInvoiceModal'
import { RecordPaymentModal } from './RecordPaymentModal'
import { GenerateReportModal } from './GenerateReportModal'

export default function BillingQuickActions() {
  const [isCreateInvoiceModalOpen, setIsCreateInvoiceModalOpen] = useState(false)
  const [isRecordPaymentModalOpen, setIsRecordPaymentModalOpen] = useState(false)
  const [isGenerateReportModalOpen, setIsGenerateReportModalOpen] = useState(false)

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
      <div className="space-y-2">
        <Button onClick={() => setIsCreateInvoiceModalOpen(true)} className="w-full">Create Invoice</Button>
        <Button onClick={() => setIsRecordPaymentModalOpen(true)} className="w-full">Record Payment</Button>
        <Button onClick={() => setIsGenerateReportModalOpen(true)} className="w-full">Generate Financial Report</Button>
      </div>
      <CreateInvoiceModal isOpen={isCreateInvoiceModalOpen} onClose={() => setIsCreateInvoiceModalOpen(false)} />
      <RecordPaymentModal isOpen={isRecordPaymentModalOpen} onClose={() => setIsRecordPaymentModalOpen(false)} />
      <GenerateReportModal isOpen={isGenerateReportModalOpen} onClose={() => setIsGenerateReportModalOpen(false)} />
    </div>
  )
}

