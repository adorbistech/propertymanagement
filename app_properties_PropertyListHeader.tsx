'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'

export default function PropertyListHeader() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('all')
  const [sort, setSort] = useState('name')

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
      <Button variant="primary">Add New Property</Button>
      <div className="flex flex-1 max-w-md gap-2">
        <Input
          type="text"
          placeholder="Search properties..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1"
        />
        <Select value={filter} onValueChange={setFilter}>
          <Select.Option value="all">All</Select.Option>
          <Select.Option value="occupied">Occupied</Select.Option>
          <Select.Option value="vacant">Vacant</Select.Option>
        </Select>
        <Select value={sort} onValueChange={setSort}>
          <Select.Option value="name">Name</Select.Option>
          <Select.Option value="units">Units</Select.Option>
          <Select.Option value="occupancy">Occupancy</Select.Option>
        </Select>
      </div>
    </div>
  )
}

