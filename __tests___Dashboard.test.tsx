import { render, screen, waitFor } from '@testing-library/react'
import { useRouter } from 'next/navigation'
import Dashboard from '../app/dashboard/page'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

jest.mock('../app/components/AllProperties', () => ({
  AllProperties: () => <div data-testid="all-properties">All Properties Component</div>,
}))

describe('Dashboard', () => {
  beforeEach(() => {
    jest.spyOn(Storage.prototype, 'getItem').mockReturnValue('fake-token')
    ;(useRouter as jest.Mock).mockReturnValue({ push: jest.fn() })
  })

  it('renders the dashboard with user name', async () => {
    render(<Dashboard />)

    await waitFor(() => {
      expect(screen.getByText('Welcome, John Doe')).toBeInTheDocument()
      expect(screen.getByText('Logout')).toBeInTheDocument()
      expect(screen.getByTestId('all-properties')).toBeInTheDocument()
    })
  })

  it('redirects to login if no token is present', async () => {
    jest.spyOn(Storage.prototype, 'getItem').mockReturnValue(null)
    const mockPush = jest.fn()
    ;(useRouter as jest.Mock).mockReturnValue({ push: mockPush })

    render(<Dashboard />)

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith('/login')
    })
  })
})

