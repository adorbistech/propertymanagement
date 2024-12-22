import { NextRequest } from 'next/server'
import { GET, POST } from '../../app/api/properties/route'
import { PrismaClient } from '@prisma/client'

jest.mock('@prisma/client')

describe('Properties API', () => {
  let mockPrismaFindMany: jest.Mock
  let mockPrismaCreate: jest.Mock

  beforeEach(() => {
    mockPrismaFindMany = jest.fn()
    mockPrismaCreate = jest.fn()
    ;(PrismaClient as jest.Mock).mockImplementation(() => ({
      property: {
        findMany: mockPrismaFindMany,
        create: mockPrismaCreate,
      },
    }))
  })

  describe('GET /api/properties', () => {
    it('returns all properties', async () => {
      const mockProperties = [
        { id: '1', name: 'Property 1', address: '123 Main St', units: [] },
        { id: '2', name: 'Property 2', address: '456 Elm St', units: [] },
      ]
      mockPrismaFindMany.mockResolvedValue(mockProperties)

      const response = await GET()
      const data = await response.json()

      expect(response.status).toBe(200)
      expect(data).toEqual(mockProperties)
    })

    it('handles errors', async () => {
      mockPrismaFindMany.mockRejectedValue(new Error('Database error'))

      const response = await GET()
      const data = await response.json()

      expect(response.status).toBe(500)
      expect(data).toEqual({ error: 'Failed to fetch properties' })
    })
  })

  describe('POST /api/properties', () => {
    it('creates a new property', async () => {
      const newProperty = { name: 'New Property', address: '789 Oak St' }
      mockPrismaCreate.mockResolvedValue({ id: '3', ...newProperty })

      const request = new NextRequest('http://localhost:3000/api/properties', {
        method: 'POST',
        body: JSON.stringify(newProperty),
      })

      const response = await POST(request)
      const data = await response.json()

      expect(response.status).toBe(200)
      expect(data).toEqual({ id: '3', ...newProperty })
    })

    it('handles errors', async () => {
      mockPrismaCreate.mockRejectedValue(new Error('Database error'))

      const request = new NextRequest('http://localhost:3000/api/properties', {
        method: 'POST',
        body: JSON.stringify({ name: 'Error Property', address: '999 Error St' }),
      })

      const response = await POST(request)
      const data = await response.json()

      expect(response.status).toBe(500)
      expect(data).toEqual({ error: 'Failed to create property' })
    })
  })
})

