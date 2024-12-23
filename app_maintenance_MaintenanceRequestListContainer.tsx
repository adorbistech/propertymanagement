'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import MaintenanceRequestList from './MaintenanceRequestList'

export default function MaintenanceRequestListContainer() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('all')
  const [sort, setSort] = useState('date')

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <Input
          type="text"
          placeholder="Search requests..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-64"
        />
        <div className="flex gap-2">
          <Select value={filter} onValueChange={setFilter}>
            <Select.Option value="all">All Requests</Select.Option>
            <Select.Option value="open">Open</Select.Option>
            <Select.Option value="inProgress">In Progress</Select.Option>
            <Select.Option value="completed">Completed</Select.Option>
          </Select>
          <Select value={sort} onValueChange={setSort}>
            <Select.Option value="date">Date</Select.Option>
            <Select.Option value="priority">Priority</Select.Option>
            <Select.Option value="status">Status</Select.Option>
          </Select>
        </div>
      </div>
      <MaintenanceRequestList searchTerm={searchTerm} filter={filter} sort={sort} />
    </div>
  )
}

