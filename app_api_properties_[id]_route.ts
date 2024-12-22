import { errorHandler } from '@/app/lib/errorHandler'

async function getProperty(id) {
  try {
    // ... code to fetch property ...
  } catch (error) {
    return errorHandler(error, 'Failed to fetch property')
  }
}

async function updateProperty(id, updates) {
  try {
    // ... code to update property ...
  } catch (error) {
    return errorHandler(error, 'Failed to update property')
  }
}

async function deleteProperty(id) {
  try {
    // ... code to delete property ...
  } catch (error) {
    return errorHandler(error, 'Failed to delete property')
  }
}

