'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import InvoiceList from './InvoiceList'

export default function InvoiceListContainer() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('all')
  const [sort, setSort] = useState('date')

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <Input
          type="text"
          placeholder="Search invoices..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-64"
        />
        <div className="flex gap-2">
          <Select value={filter} onValueChange={setFilter}>
            <Select.Option value="all">All Invoices</Select.Option>
            <Select.Option value="paid">Paid</Select.Option>
            <Select.Option value="unpaid">Unpaid</Select.Option>
            <Select.Option value="overdue">Overdue</Select.Option>
          </Select>
          <Select value={sort} onValueChange={setSort}>
            <Select.Option value="date">Date</Select.Option>
            <Select.Option value="amount">Amount</Select.Option>
            <Select.Option value="dueDate">Due Date</Select.Option>
          </Select>
        </div>
      </div>
      <InvoiceList searchTerm={searchTerm} filter={filter} sort={sort} />
    </div>
  )
}

