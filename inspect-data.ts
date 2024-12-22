import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Fetch all properties
  const properties = await prisma.property.findMany({
    include: { units: true }
  })
  console.log('Properties:', JSON.stringify(properties, null, 2))

  // Fetch all users
  const users = await prisma.user.findMany()
  console.log('Users:', JSON.stringify(users, null, 2))
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

