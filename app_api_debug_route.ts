import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const userCount = await prisma.user.count()
    const propertyCount = await prisma.property.count()
    const unitCount = await prisma.unit.count()

    return NextResponse.json({
      message: 'Debug information',
      userCount,
      propertyCount,
      unitCount,
      databaseConnection: 'successful'
    })
  } catch (error) {
    console.error('Debug route error:', error)
    return NextResponse.json({
      error: 'An error occurred while fetching debug information',
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
}

