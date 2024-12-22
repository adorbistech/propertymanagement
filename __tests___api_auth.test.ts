import { NextRequest } from 'next/server'
import { POST as registerHandler } from '../../app/api/auth/register/route'
import { POST as loginHandler } from '../../app/api/auth/login/route'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

jest.mock('@prisma/client')
jest.mock('bcrypt')
jest.mock('jsonwebtoken')

describe('Auth API', () => {
  let mockPrismaCreate: jest.Mock
  let mockPrismaFindUnique: jest.Mock

  beforeEach(() => {
    mockPrismaCreate = jest.fn()
    mockPrismaFindUnique = jest.fn()
    ;(PrismaClient as jest.Mock).mockImplementation(() => ({
      user: {
        create: mockPrismaCreate,
        findUnique: mockPrismaFindUnique,
      },
    }))
  })

  describe('POST /api/auth/register', () => {
    it('registers a new user', async () => {
      const newUser = { name: 'Test User', email: 'test@example.com', password: 'password123' }
      mockPrismaCreate.mockResolvedValue({ id: '1', ...newUser, password: 'hashed_password' })
      ;(bcrypt.hash as jest.Mock).mockResolvedValue('hashed_password')

      const request = new NextRequest('http://localhost:3000/api/auth/register', {
        method: 'POST',
        body: JSON.stringify(newUser),
      })

      const response = await registerHandler(request)
      const data = await response.json()

      expect(response.status).toBe(200)
      expect(data.user).toEqual({ id: '1', name: 'Test User', email: 'test@example.com' })
    })

    it('handles registration errors', async () => {
      mockPrismaCreate.mockRejectedValue(new Error('Database error'))

      const request = new NextRequest('http://localhost:3000/api/auth/register', {
        method: 'POST',
        body: JSON.stringify({ name: 'Test User', email: 'test@example.com', password: 'password123' }),
      })

      const response = await registerHandler(request)
      const data = await response.json()

      expect(response.status).toBe(500)
      expect(data).toEqual({ error: 'Internal server error' })
    })
  })

  describe('POST /api/auth/login', () => {
    it('logs in a user', async () => {
      const user = { id: '1', email: 'test@example.com', password: 'hashed_password' }
      mockPrismaFindUnique.mockResolvedValue(user)
      ;(bcrypt.compare as jest.Mock).mockResolvedValue(true)
      ;(jwt.sign as jest.Mock).mockReturnValue('fake_token')

      const request = new NextRequest('http://localhost:3000/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email: 'test@example.com', password: 'password123' }),
      })

      const response = await loginHandler(request)
      const data = await response.json()

      expect(response.status).toBe(200)
      expect(data).toEqual({ token: 'fake_token', user: { id: '1', email: 'test@example.com' } })
    })

    it('handles invalid credentials', async () => {
      mockPrismaFindUnique.mockResolvedValue(null)

      const request = new NextRequest('http://localhost:3000/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email: 'test@example.com', password: 'wrongpassword' }),
      })

      const response = await loginHandler(request)
      const data = await response.json()

      expect(response.status).toBe(400)
      expect(data).toEqual({ error: 'Invalid credentials' })
    })
  })
})

