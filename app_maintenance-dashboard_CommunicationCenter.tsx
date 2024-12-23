import { fetchRecentMessages } from '@/lib/api'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default async function CommunicationCenter() {
  const messages = await fetchRecentMessages()

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Communication Center</h2>
      <ul className="space-y-2 mb-4">
        {messages.map((message) => (
          <li key={message.id} className="flex justify-between items-center">
            <span className="truncate">{message.subject}</span>
            <span className="text-sm text-gray-500">{message.sender}</span>
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center">
        <Link href="/maintenance-dashboard/messages">
          <span className="text-blue-600 hover:underline">View All Messages</span>
        </Link>
        <Button>New Message</Button>
      </div>
    </div>
  )
}

