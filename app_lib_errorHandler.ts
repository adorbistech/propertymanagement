import { NextResponse } from 'next/server'

export function errorHandler(error: unknown, message: string) {
  console.error(`${message}:`, error)
  return NextResponse.json({ error: message }, { status: 500 })
}

