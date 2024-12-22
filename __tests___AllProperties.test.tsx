import { render, screen, waitFor } from '@testing-library/react'
import { AllProperties } from '../app/components/AllProperties'

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null
    }
  }
}))

const mockProperties = [
  { id: '1', name: 'Property 1', address: '123 Main St', units: 5 },
  { id: '2', name: 'Property 2', address: '456 Elm St', units: 3 },
]

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockProperties),
  })
) as jest.Mock

describe('AllProperties', () => {
  it('renders the component', async () => {
    render(<AllProperties />)
    expect(screen.getByText('All Properties')).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.getByText('Property 1')).toBeInTheDocument()
      expect(screen.getByText('Property 2')).toBeInTheDocument()
    })
  })

  it('displays property details correctly', async () => {
    render(<AllProperties />)

    await waitFor(() => {
      expect(screen.getByText('123 Main St')).toBeInTheDocument()
      expect(screen.getByText('456 Elm St')).toBeInTheDocument()
      expect(screen.getByText('5')).toBeInTheDocument()
      expect(screen.getByText('3')).toBeInTheDocument()
    })
  })

  it('handles API errors gracefully', async () => {
    global.fetch = jest.fn(() =>
      Promise.reject(new Error('API Error'))
    ) as jest.Mock

    render(<AllProperties />)

    await waitFor(() => {
      expect(screen.getByText('Error loading properties')).toBeInTheDocument()
    })
  })
})

