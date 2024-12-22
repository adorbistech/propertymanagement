import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  try {
    // Simple database connection test
    await prisma.$queryRaw`SELECT 1`
    return NextResponse.json({ 
      message: 'API is working',
      dbConnection: 'successful',
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Database connection error:', error)
    return NextResponse.json({ 
      message: 'API is working, but database connection failed',
      error: error instanceof Error ? error.message : String(error),
      timestamp: new Date().toISOString()
    }, { status: 500 })
  }
}

