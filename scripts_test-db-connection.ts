import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  try {
    await prisma.$connect()
    console.log('Successfully connected to the database')

    // Perform a simple query
    const userCount = await prisma.user.count()
    console.log(`Number of users in the database: ${userCount}`)

    // Test creating a user
    const newUser = await prisma.user.create({
      data: {
        name: 'Test User',
        email: 'testuser@example.com',
        password: 'password123'
      }
    })
    console.log('Created new user:', newUser)

    // Delete the test user
    await prisma.user.delete({
      where: { id: newUser.id }
    })
    console.log('Deleted test user')

  } catch (error) {
    console.error('Error:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main()

