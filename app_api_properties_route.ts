import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { errorHandler } from '@/app/lib/errorHandler'
import corsMiddleware from '@/lib/cors'

export async function GET(req: Request) {
  await corsMiddleware(req, NextResponse)
  try {
    const properties = await prisma.property.findMany()
    return NextResponse.json(properties)
  } catch (error) {
    return errorHandler(error, 'Failed to fetch properties')
  }
}

export async function POST(req: Request) {
  await corsMiddleware(req, NextResponse)
  try {
    const { name, address } = await req.json()
    
    if (!name || !address) {
      return NextResponse.json({ error: 'Name and address are required' }, { status: 400 })
    }

    const property = await prisma.property.create({
      data: { 
        name, 
        address,
      },
    })
    return NextResponse.json(property)
  } catch (error) {
    return errorHandler(error, 'Failed to create property')
  }
}

