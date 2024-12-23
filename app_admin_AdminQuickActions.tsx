'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { AddUserModal } from './AddUserModal'
import { ConfigureRolesModal } from './ConfigureRolesModal'
import { SystemSettingsModal } from './SystemSettingsModal'

export default function AdminQuickActions() {
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false)
  const [isConfigureRolesModalOpen, setIsConfigureRolesModalOpen] = useState(false)
  const [isSystemSettingsModalOpen, setIsSystemSettingsModalOpen] = useState(false)

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
      <div className="space-y-2">
        <Button onClick={() => setIsAddUserModalOpen(true)} className="w-full">Add User</Button>
        <Button onClick={() => setIsConfigureRolesModalOpen(true)} className="w-full">Configure Roles</Button>
        <Button onClick={() => setIsSystemSettingsModalOpen(true)} className="w-full">System Settings</Button>
      </div>
      <AddUserModal isOpen={isAddUserModalOpen} onClose={() => setIsAddUserModalOpen(false)} />
      <ConfigureRolesModal isOpen={isConfigureRolesModalOpen} onClose={() => setIsConfigureRolesModalOpen(false)} />
      <SystemSettingsModal isOpen={isSystemSettingsModalOpen} onClose={() => setIsSystemSettingsModalOpen(false)} />
    </div>
  )
}

