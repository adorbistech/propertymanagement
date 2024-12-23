'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import TenantList from './TenantList'

export default function TenantListContainer() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('all')
  const [sort, setSort] = useState('name')

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <Input
          type="text"
          placeholder="Search tenants..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-64"
        />
        <div className="flex gap-2">
          <Select value={filter} onValueChange={setFilter}>
            <Select.Option value="all">All Tenants</Select.Option>
            <Select.Option value="active">Active Leases</Select.Option>
            <Select.Option value="expiring">Expiring Soon</Select.Option>
          </Select>
          <Select value={sort} onValueChange={setSort}>
            <Select.Option value="name">Name</Select.Option>
            <Select.Option value="moveIn">Move-in Date</Select.Option>
            <Select.Option value="rent">Rent Amount</Select.Option>
          </Select>
        </div>
      </div>
      <TenantList searchTerm={searchTerm} filter={filter} sort={sort} />
    </div>
  )
}

